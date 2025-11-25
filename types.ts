import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  coverImage: string;
  description: string;
  gallery: string[];
}

export interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}