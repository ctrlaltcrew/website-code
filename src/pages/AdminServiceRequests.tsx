import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { handleError, USER_ERRORS } from '@/lib/errorHandler';
import { ArrowLeft, Mail, Phone, Building, Calendar, DollarSign, Clock } from 'lucide-react';

interface ServiceRequest {
  id: string;
  service_type: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  project_description: string;
  budget_range: string | null;
  timeline: string | null;
  status: string;
  created_at: string;
}

const AdminServiceRequests = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [requests, setRequests] = useState<ServiceRequest[]>([]);

  useEffect(() => {
    checkAdminAccess();
  }, []);

  const checkAdminAccess = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate('/admin');
        return;
      }

      const { data: roleData, error: roleError } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', session.user.id)
        .eq('role', 'admin')
        .single();

      if (roleError || !roleData) {
        navigate('/admin');
        return;
      }

      setIsAdmin(true);
      fetchRequests();
    } catch (error: any) {
      handleError(error, USER_ERRORS.ACCESS_DENIED);
      navigate('/admin');
    } finally {
      setLoading(false);
    }
  };

  const fetchRequests = async () => {
    try {
      const { data, error } = await supabase
        .from('service_requests')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setRequests(data || []);
    } catch (error: any) {
      handleError(error, USER_ERRORS.LOAD_FAILED);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('service_requests')
        .update({ status })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Status Updated",
        description: "Request status has been updated successfully.",
      });

      fetchRequests();
    } catch (error: any) {
      handleError(error, USER_ERRORS.SAVE_FAILED);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/admin');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'default';
      case 'in-progress': return 'secondary';
      case 'completed': return 'outline';
      case 'rejected': return 'destructive';
      default: return 'default';
    }
  };

  return (
    <div className="min-h-screen bg-background p-3 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-0 mb-4 md:mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
            <Button variant="ghost" onClick={() => navigate('/admin/dashboard')} size="sm" className="-ml-2">
              <ArrowLeft className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
              <span className="text-xs md:text-sm">Back</span>
            </Button>
            <h1 className="text-xl md:text-3xl font-bold">Service Requests</h1>
          </div>
          <Button variant="outline" onClick={handleSignOut} size="sm" className="w-full sm:w-auto">
            <span className="text-xs md:text-sm">Sign Out</span>
          </Button>
        </div>

        {requests.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">No service requests yet.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 md:gap-6">
            {requests.map((request) => (
              <Card key={request.id} className="hover:border-primary transition-all">
                <CardHeader className="p-3 md:p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
                    <div className="flex-1">
                      <CardTitle className="text-base md:text-xl mb-1 md:mb-2">{request.service_type}</CardTitle>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        Submitted {new Date(request.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <Select
                      value={request.status}
                      onValueChange={(value) => updateStatus(request.id, value)}
                    >
                      <SelectTrigger className="w-full sm:w-[150px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent className="p-3 md:p-6">
                  <div className="space-y-3 md:space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                      <div className="flex items-start md:items-center gap-2 text-xs md:text-sm">
                        <Mail className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground flex-shrink-0 mt-0.5 md:mt-0" />
                        <div className="flex flex-col md:flex-row md:items-center gap-0 md:gap-1 min-w-0">
                          <span className="font-medium truncate">{request.name}</span>
                          <span className="text-muted-foreground break-all">({request.email})</span>
                        </div>
                      </div>
                      {request.phone && (
                        <div className="flex items-center gap-2 text-xs md:text-sm">
                          <Phone className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground flex-shrink-0" />
                          <span className="break-all">{request.phone}</span>
                        </div>
                      )}
                      {request.company && (
                        <div className="flex items-center gap-2 text-xs md:text-sm">
                          <Building className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground flex-shrink-0" />
                          <span className="truncate">{request.company}</span>
                        </div>
                      )}
                      {request.budget_range && (
                        <div className="flex items-center gap-2 text-xs md:text-sm">
                          <DollarSign className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground flex-shrink-0" />
                          <span className="capitalize">{request.budget_range.replace(/-/g, ' ')}</span>
                        </div>
                      )}
                      {request.timeline && (
                        <div className="flex items-center gap-2 text-xs md:text-sm">
                          <Clock className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground flex-shrink-0" />
                          <span className="capitalize">{request.timeline}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <h4 className="font-semibold text-xs md:text-sm mb-1 md:mb-2">Project Description:</h4>
                      <p className="text-xs md:text-sm text-muted-foreground whitespace-pre-wrap break-words">
                        {request.project_description}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 pt-2">
                      <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                        <a href={`mailto:${request.email}`}>
                          <Mail className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                          <span className="text-xs md:text-sm">Email Client</span>
                        </a>
                      </Button>
                      {request.phone && (
                        <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                          <a href={`tel:${request.phone}`}>
                            <Phone className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                            <span className="text-xs md:text-sm">Call Client</span>
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminServiceRequests;
