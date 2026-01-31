export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string
          title: string
          slug: string
          content: string
          cover_image: string | null
          author: string
          created_at: string
          published: boolean
        }
        Insert: {
          id?: string
          title: string
          slug: string
          content: string
          cover_image?: string | null
          author: string
          created_at?: string
          published?: boolean
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          content?: string
          cover_image?: string | null
          author?: string
          created_at?: string
          published?: boolean
        }
        Relationships: []
      }
      service_requests: {
        Row: {
          id: string
          name: string
          email: string
          service: string
          message: string
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          service: string
          message: string
          status?: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          service?: string
          message?: string
          status?: string
          created_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          user_id: string
          role: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          role: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          role?: string
          created_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
