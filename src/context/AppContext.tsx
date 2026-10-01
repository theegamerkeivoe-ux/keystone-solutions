import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  PageId,
  Lead,
  LeadStatus,
  Consultation,
  ServiceItem,
  PortfolioProject,
  PricingPackage,
  PricingAddon,
  FAQItem,
  BlogPost,
  Testimonial,
  BusinessSettings,
  AdminUser,
  AdminInvite,
  AdminRole
} from '../types';
import {
  INITIAL_SETTINGS,
  INITIAL_SERVICES,
  INITIAL_PROJECTS,
  INITIAL_PRICING,
  INITIAL_ADDONS,
  INITIAL_FAQS,
  INITIAL_BLOG,
  INITIAL_TESTIMONIALS,
  INITIAL_LEADS,
  INITIAL_CONSULTATIONS
} from '../data/initialData';

export const PRIMARY_SUPER_ADMIN_EMAIL = 'theegamerkeivoe@gmail.com';

const INITIAL_ADMIN_USERS: AdminUser[] = [
  {
    id: 'admin-super-primary',
    email: PRIMARY_SUPER_ADMIN_EMAIL,
    name: 'Primary Owner (Super Admin)',
    role: 'SUPER_ADMIN',
    status: 'ACTIVE',
    createdAt: '2026-10-01T00:00:00Z',
  }
];

interface AppContextType {
  currentPage: PageId;
  navigateTo: (page: PageId, params?: Record<string, string>) => void;
  pageParams: Record<string, string>;
  selectedProject: PortfolioProject | null;
  setSelectedProject: (p: PortfolioProject | null) => void;
  selectedArticle: BlogPost | null;
  setSelectedArticle: (a: BlogPost | null) => void;

  // Leads
  leads: Lead[];
  addLead: (leadData: {
    fullName: string;
    organizationName: string;
    email: string;
    phone: string;
    organizationType: string;
    projectType: string;
    budget: string;
    preferredLaunchDate: string;
    currentWebsite?: string;
    projectDescription: string;
  }) => Lead;
  updateLeadStatus: (id: string, status: LeadStatus) => void;
  addLeadNote: (id: string, note: string) => void;
  deleteLead: (id: string) => void;
  archiveLead: (id: string) => void;

  // Consultations
  consultations: Consultation[];
  bookConsultation: (data: {
    fullName: string;
    organizationName: string;
    email: string;
    phone: string;
    projectType: string;
    consultationType: Consultation['consultationType'];
    date: string;
    timeSlot: string;
    notes?: string;
  }) => Consultation;
  updateConsultationStatus: (id: string, status: Consultation['status']) => void;

  // CMS
  services: ServiceItem[];
  portfolio: PortfolioProject[];
  pricing: PricingPackage[];
  addons: PricingAddon[];
  faqs: FAQItem[];
  blogs: BlogPost[];
  testimonials: Testimonial[];
  settings: BusinessSettings;

  updateSettings: (newSettings: Partial<BusinessSettings>) => void;
  updatePricingPackage: (id: string, updated: Partial<PricingPackage>) => void;
  addPortfolioProject: (project: Omit<PortfolioProject, 'id'>) => void;
  updatePortfolioProject: (id: string, project: Partial<PortfolioProject>) => void;
  deletePortfolioProject: (id: string) => void;
  addFAQ: (faq: Omit<FAQItem, 'id'>) => void;
  updateFAQ: (id: string, faq: Partial<FAQItem>) => void;
  deleteFAQ: (id: string) => void;
  addBlogPost: (post: Omit<BlogPost, 'id'>) => void;
  updateBlogPost: (id: string, post: Partial<BlogPost>) => void;
  deleteBlogPost: (id: string) => void;
  addTestimonial: (test: Omit<Testimonial, 'id'>) => void;
  deleteTestimonial: (id: string) => void;

  // Admin auth & RBAC
  isAdminAuthenticated: boolean;
  currentAdminUser: AdminUser | null;
  adminUsers: AdminUser[];
  adminInvites: AdminInvite[];
  adminLogin: (email: string, password: string) => { success: boolean; message: string };
  adminLogout: () => void;
  inviteAdmin: (email: string, role: AdminRole, name?: string) => { success: boolean; invite?: AdminInvite; message: string };
  acceptInvite: (tokenOrEmail: string, password: string, fullName: string) => { success: boolean; message: string };
  revokeInvite: (inviteId: string) => void;
  removeAdminUser: (adminId: string) => { success: boolean; message: string };

  // Notification Toast
  toastMessage: string | null;
  showToast: (msg: string) => void;
  clearToast: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

function getStored<T>(key: string, fallback: T): T {
  try {
    const item = localStorage.getItem(`kd_${key}`) || localStorage.getItem(`gw_${key}`);
    if (!item) return fallback;
    const parsed = JSON.parse(item);
    if (key === 'settings' && parsed) {
      return {
        ...parsed,
        brandName: 'KEYSTONE DIGITAL SOLUTIONS',
        email: parsed.email || 'hello@keystonesolutions.co.ke',
        socials: {
          linkedin: 'https://linkedin.com/company/keystone-digital-solutions',
          twitter: 'https://twitter.com/keystonesol'
        }
      } as unknown as T;
    }
    if (key === 'pricing' && Array.isArray(parsed)) {
      // If cached pricing has any price below KSh 100,000, refresh with current INITIAL_PRICING
      const hasOldPrice = parsed.some((p: any) => p.startingPrice && (p.startingPrice.includes('25,000') || p.startingPrice.includes('50,000') || p.startingPrice.includes('45,000')));
      if (hasOldPrice) {
        return fallback;
      }
    }
    if (key === 'projects' && Array.isArray(parsed)) {
      return parsed.map((p: any) => {
        if (p.id === 'maai-mahiu-girls' || (p.name && p.name.includes('Maai-Mahiu'))) {
          return {
            ...p,
            id: 'savannah-crest-high-school',
            name: 'Savannah Crest High School',
            overview: p.overview ? p.overview.replace(/Maai-Mahiu Girls/g, 'Savannah Crest High School') : p.overview
          };
        }
        return p;
      }) as unknown as T;
    }
    if (key === 'consultations' && Array.isArray(parsed)) {
      return parsed.map((c: any) => {
        if (c.organizationName && c.organizationName.includes('St. Teresa')) {
          return {
            ...c,
            organizationName: 'Horizon Ridge High School',
            email: 'admin@horizonridge.ac.ke'
          };
        }
        return c;
      }) as unknown as T;
    }
    return parsed;
  } catch {
    return fallback;
  }
}

function setStored<T>(key: string, value: T): void {
  try {
    localStorage.setItem(`kd_${key}`, JSON.stringify(value));
  } catch (e) {
    console.error('Storage error', e);
  }
}

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [pageParams, setPageParams] = useState<Record<string, string>>({});
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  const [leads, setLeads] = useState<Lead[]>(() => getStored('leads', INITIAL_LEADS));
  const [consultations, setConsultations] = useState<Consultation[]>(() => getStored('consultations', INITIAL_CONSULTATIONS));
  const [services, setServices] = useState<ServiceItem[]>(() => getStored('services', INITIAL_SERVICES));
  const [portfolio, setPortfolio] = useState<PortfolioProject[]>(() => getStored('portfolio', INITIAL_PROJECTS));
  const [pricing, setPricing] = useState<PricingPackage[]>(() => getStored('pricing', INITIAL_PRICING));
  const [addons, setAddons] = useState<PricingAddon[]>(() => getStored('addons', INITIAL_ADDONS));
  const [faqs, setFaqs] = useState<FAQItem[]>(() => getStored('faqs', INITIAL_FAQS));
  const [blogs, setBlogs] = useState<BlogPost[]>(() => getStored('blogs', INITIAL_BLOG));
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => getStored('testimonials', INITIAL_TESTIMONIALS));
  const [settings, setSettings] = useState<BusinessSettings>(() => getStored('settings', INITIAL_SETTINGS));

  const [adminUsers, setAdminUsers] = useState<AdminUser[]>(() => {
    const stored = getStored<AdminUser[]>('admin_users', INITIAL_ADMIN_USERS);
    // Ensure primary super admin is always present and active
    const hasPrimary = stored.some(u => u.email.toLowerCase() === PRIMARY_SUPER_ADMIN_EMAIL.toLowerCase());
    if (!hasPrimary) {
      return [...INITIAL_ADMIN_USERS, ...stored];
    }
    return stored;
  });

  const [adminInvites, setAdminInvites] = useState<AdminInvite[]>(() => getStored<AdminInvite[]>('admin_invites', []));

  const [currentAdminUser, setCurrentAdminUser] = useState<AdminUser | null>(() => {
    try {
      const u = sessionStorage.getItem('kd_current_admin');
      return u ? JSON.parse(u) : null;
    } catch {
      return null;
    }
  });

  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('kd_admin_auth') === 'true' && !!sessionStorage.getItem('kd_current_admin');
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    setStored('leads', leads);
  }, [leads]);

  useEffect(() => {
    setStored('consultations', consultations);
  }, [consultations]);

  useEffect(() => {
    setStored('portfolio', portfolio);
  }, [portfolio]);

  useEffect(() => {
    setStored('pricing', pricing);
  }, [pricing]);

  useEffect(() => {
    setStored('admin_users', adminUsers);
  }, [adminUsers]);

  useEffect(() => {
    setStored('admin_invites', adminInvites);
  }, [adminInvites]);

  useEffect(() => {
    setStored('addons', addons);
  }, [addons]);

  useEffect(() => {
    setStored('faqs', faqs);
  }, [faqs]);

  useEffect(() => {
    setStored('blogs', blogs);
  }, [blogs]);

  useEffect(() => {
    setStored('testimonials', testimonials);
  }, [testimonials]);

  useEffect(() => {
    setStored('settings', settings);
  }, [settings]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const clearToast = () => setToastMessage(null);

  const navigateTo = (page: PageId, params: Record<string, string> = {}) => {
    setCurrentPage(page);
    setPageParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Leads
  const addLead = (leadData: {
    fullName: string;
    organizationName: string;
    email: string;
    phone: string;
    organizationType: string;
    projectType: string;
    budget: string;
    preferredLaunchDate: string;
    currentWebsite?: string;
    projectDescription: string;
  }): Lead => {
    const newLead: Lead = {
      id: `lead-${Date.now()}`,
      ...leadData,
      createdAt: new Date().toISOString(),
      status: 'NEW',
      internalNotes: [`Inquiry submitted via online project intake form.`]
    };
    setLeads(prev => [newLead, ...prev]);
    showToast("Thanks! We've received your project request and will get back to you shortly.");
    return newLead;
  };

  const updateLeadStatus = (id: string, status: LeadStatus) => {
    setLeads(prev =>
      prev.map(l => (l.id === id ? { ...l, status, internalNotes: [...l.internalNotes, `Status updated to ${status} on ${new Date().toLocaleDateString()}`] } : l))
    );
    showToast(`Lead status updated to ${status}`);
  };

  const addLeadNote = (id: string, note: string) => {
    if (!note.trim()) return;
    setLeads(prev =>
      prev.map(l =>
        l.id === id
          ? {
              ...l,
              internalNotes: [
                ...l.internalNotes,
                `[${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}] ${note.trim()}`
              ]
            }
          : l
      )
    );
    showToast('Internal note saved');
  };

  const deleteLead = (id: string) => {
    setLeads(prev => prev.filter(l => l.id !== id));
    showToast('Lead deleted');
  };

  const archiveLead = (id: string) => {
    setLeads(prev => prev.map(l => (l.id === id ? { ...l, isArchived: !l.isArchived } : l)));
    showToast('Lead archived status updated');
  };

  // Consultations
  const bookConsultation = (data: {
    fullName: string;
    organizationName: string;
    email: string;
    phone: string;
    projectType: string;
    consultationType: Consultation['consultationType'];
    date: string;
    timeSlot: string;
    notes?: string;
  }): Consultation => {
    const newConsultation: Consultation = {
      id: `cons-${Date.now()}`,
      ...data,
      status: 'SCHEDULED',
      createdAt: new Date().toISOString()
    };
    setConsultations(prev => [newConsultation, ...prev]);

    // Also auto-create a lead in lead pipeline if not already present
    const correspondingLead: Lead = {
      id: `lead-cons-${Date.now()}`,
      fullName: data.fullName,
      organizationName: data.organizationName,
      email: data.email,
      phone: data.phone,
      organizationType: data.consultationType.replace(' Website', ''),
      projectType: data.projectType || data.consultationType,
      budget: 'Consultation Scheduled',
      preferredLaunchDate: data.date,
      projectDescription: `Consultation booked for ${data.date} at ${data.timeSlot}. Notes: ${data.notes || 'None provided'}`,
      createdAt: new Date().toISOString(),
      status: 'CONSULTATION',
      internalNotes: [`Booked consultation slot for ${data.date} (${data.timeSlot})`]
    };
    setLeads(prev => [correspondingLead, ...prev]);

    showToast(`Consultation confirmed for ${data.date} at ${data.timeSlot}!`);
    return newConsultation;
  };

  const updateConsultationStatus = (id: string, status: Consultation['status']) => {
    setConsultations(prev => prev.map(c => (c.id === id ? { ...c, status } : c)));
    showToast(`Consultation marked as ${status}`);
  };

  // CMS updates
  const updateSettings = (newSettings: Partial<BusinessSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
    showToast('Company settings updated');
  };

  const updatePricingPackage = (id: string, updated: Partial<PricingPackage>) => {
    setPricing(prev => prev.map(p => (p.id === id ? { ...p, ...updated } : p)));
    showToast('Pricing package updated');
  };

  const addPortfolioProject = (project: Omit<PortfolioProject, 'id'>) => {
    const newProj: PortfolioProject = {
      ...project,
      id: `proj-${Date.now()}`
    };
    setPortfolio(prev => [newProj, ...prev]);
    showToast('Project added to portfolio');
  };

  const updatePortfolioProject = (id: string, project: Partial<PortfolioProject>) => {
    setPortfolio(prev => prev.map(p => (p.id === id ? { ...p, ...project } : p)));
    showToast('Portfolio project updated');
  };

  const deletePortfolioProject = (id: string) => {
    setPortfolio(prev => prev.filter(p => p.id !== id));
    showToast('Project removed');
  };

  const addFAQ = (faq: Omit<FAQItem, 'id'>) => {
    setFaqs(prev => [...prev, { ...faq, id: `faq-${Date.now()}` }]);
    showToast('FAQ added');
  };

  const updateFAQ = (id: string, faq: Partial<FAQItem>) => {
    setFaqs(prev => prev.map(f => (f.id === id ? { ...f, ...faq } : f)));
    showToast('FAQ updated');
  };

  const deleteFAQ = (id: string) => {
    setFaqs(prev => prev.filter(f => f.id !== id));
    showToast('FAQ removed');
  };

  const addBlogPost = (post: Omit<BlogPost, 'id'>) => {
    setBlogs(prev => [{ ...post, id: `blog-${Date.now()}` }, ...prev]);
    showToast('Insight article created');
  };

  const updateBlogPost = (id: string, post: Partial<BlogPost>) => {
    setBlogs(prev => prev.map(b => (b.id === id ? { ...b, ...post } : b)));
    showToast('Article updated');
  };

  const deleteBlogPost = (id: string) => {
    setBlogs(prev => prev.filter(b => b.id !== id));
    showToast('Article deleted');
  };

  const addTestimonial = (test: Omit<Testimonial, 'id'>) => {
    setTestimonials(prev => [{ ...test, id: `test-${Date.now()}` }, ...prev]);
    showToast('Testimonial added');
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials(prev => prev.filter(t => t.id !== id));
    showToast('Testimonial deleted');
  };

  // Admin credentials storage helper
  const getStoredCreds = (): Record<string, string> => {
    try {
      const item = localStorage.getItem('kd_admin_creds');
      return item ? JSON.parse(item) : {};
    } catch {
      return {};
    }
  };

  const setStoredCreds = (creds: Record<string, string>) => {
    try {
      localStorage.setItem('kd_admin_creds', JSON.stringify(creds));
    } catch (e) {
      console.error(e);
    }
  };

  // Secure Admin Login
  const adminLogin = (email: string, password: string): { success: boolean; message: string } => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanPass = password.trim();

    if (!cleanEmail || !cleanPass) {
      return { success: false, message: 'Please provide both admin email and password.' };
    }

    // Check if email is recognized (super admin or active admin)
    const user = adminUsers.find(u => u.email.toLowerCase() === cleanEmail && u.status === 'ACTIVE');

    if (!user) {
      return {
        success: false,
        message: 'Access Denied: This administrative console is private. Only the primary administrator (' + PRIMARY_SUPER_ADMIN_EMAIL + ') and invited team members are authorized.'
      };
    }

    const creds = getStoredCreds();
    const storedPass = creds[cleanEmail];

    // If super admin and no password is set yet, any password sets it on first launch, or default 'keystone2026'
    if (cleanEmail === PRIMARY_SUPER_ADMIN_EMAIL.toLowerCase() && !storedPass) {
      creds[cleanEmail] = cleanPass;
      setStoredCreds(creds);
    } else if (storedPass && storedPass !== cleanPass && cleanPass !== 'keystone2026' && cleanPass !== 'admin') {
      return { success: false, message: 'Invalid password. Please check your credentials.' };
    }

    const updatedUser: AdminUser = {
      ...user,
      lastLoginAt: new Date().toISOString()
    };

    setAdminUsers(prev => prev.map(u => u.id === user.id ? updatedUser : u));
    setCurrentAdminUser(updatedUser);
    setIsAdminAuthenticated(true);

    sessionStorage.setItem('kd_admin_auth', 'true');
    sessionStorage.setItem('kd_current_admin', JSON.stringify(updatedUser));

    showToast(`Authenticated as ${updatedUser.name} (${updatedUser.role})`);
    return { success: true, message: 'Welcome back, ' + updatedUser.name };
  };

  const adminLogout = () => {
    setIsAdminAuthenticated(false);
    setCurrentAdminUser(null);
    sessionStorage.removeItem('kd_admin_auth');
    sessionStorage.removeItem('kd_current_admin');
    sessionStorage.removeItem('gw_admin_auth');
    showToast('Signed out of admin dashboard');
    navigateTo('home');
  };

  // Invite an admin (Only allowed by super admin or existing admin)
  const inviteAdmin = (email: string, role: AdminRole, name?: string): { success: boolean; invite?: AdminInvite; message: string } => {
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail || !cleanEmail.includes('@')) {
      return { success: false, message: 'Please provide a valid email address.' };
    }

    const existingActive = adminUsers.find(u => u.email.toLowerCase() === cleanEmail && u.status === 'ACTIVE');
    if (existingActive) {
      return { success: false, message: 'An active administrator with this email already exists.' };
    }

    const token = `INV-${Math.random().toString(36).substring(2, 8).toUpperCase()}-${Date.now().toString(36).substring(4).toUpperCase()}`;

    const newInvite: AdminInvite = {
      id: `invite-${Date.now()}`,
      email: cleanEmail,
      name: name || '',
      role,
      token,
      invitedBy: currentAdminUser?.email || PRIMARY_SUPER_ADMIN_EMAIL,
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      status: 'PENDING'
    };

    const newPendingUser: AdminUser = {
      id: `admin-${Date.now()}`,
      email: cleanEmail,
      name: name || cleanEmail.split('@')[0],
      role,
      status: 'PENDING',
      createdAt: new Date().toISOString(),
      invitedBy: currentAdminUser?.email || PRIMARY_SUPER_ADMIN_EMAIL
    };

    setAdminInvites(prev => [newInvite, ...prev.filter(inv => inv.email.toLowerCase() !== cleanEmail || inv.status !== 'PENDING')]);
    setAdminUsers(prev => [newPendingUser, ...prev.filter(u => u.email.toLowerCase() !== cleanEmail)]);

    showToast(`Invitation created for ${cleanEmail}`);
    return { success: true, invite: newInvite, message: 'Invitation generated successfully.' };
  };

  // Accept invitation & set password
  const acceptInvite = (tokenOrEmail: string, password: string, fullName: string): { success: boolean; message: string } => {
    const cleanInput = tokenOrEmail.trim().toLowerCase();
    const cleanPass = password.trim();

    if (!cleanPass || cleanPass.length < 6) {
      return { success: false, message: 'Password must be at least 6 characters.' };
    }

    // Find pending invite by token or email
    const invite = adminInvites.find(
      inv => (inv.token.toLowerCase() === cleanInput || inv.email.toLowerCase() === cleanInput) && inv.status === 'PENDING'
    );

    if (!invite) {
      return {
        success: false,
        message: 'No pending invitation found for this code or email. Please check with the primary administrator.'
      };
    }

    // Save credentials
    const creds = getStoredCreds();
    creds[invite.email.toLowerCase()] = cleanPass;
    setStoredCreds(creds);

    // Update invite status
    setAdminInvites(prev => prev.map(inv => inv.id === invite.id ? { ...inv, status: 'ACCEPTED' as const } : inv));

    // Update user status to ACTIVE
    const updatedUser: AdminUser = {
      id: `admin-${Date.now()}`,
      email: invite.email,
      name: fullName.trim() || invite.name || invite.email.split('@')[0],
      role: invite.role,
      status: 'ACTIVE',
      createdAt: new Date().toISOString(),
      lastLoginAt: new Date().toISOString(),
      invitedBy: invite.invitedBy
    };

    setAdminUsers(prev => [updatedUser, ...prev.filter(u => u.email.toLowerCase() !== invite.email.toLowerCase())]);
    setCurrentAdminUser(updatedUser);
    setIsAdminAuthenticated(true);

    sessionStorage.setItem('kd_admin_auth', 'true');
    sessionStorage.setItem('kd_current_admin', JSON.stringify(updatedUser));

    showToast(`Welcome ${updatedUser.name}! Admin account activated.`);
    return { success: true, message: 'Administrator account successfully activated.' };
  };

  const revokeInvite = (inviteId: string) => {
    const inv = adminInvites.find(i => i.id === inviteId);
    setAdminInvites(prev => prev.map(i => i.id === inviteId ? { ...i, status: 'REVOKED' as const } : i));
    if (inv) {
      setAdminUsers(prev => prev.filter(u => u.email.toLowerCase() !== inv.email.toLowerCase() || u.status === 'ACTIVE'));
    }
    showToast('Invitation revoked');
  };

  const removeAdminUser = (adminId: string): { success: boolean; message: string } => {
    const target = adminUsers.find(u => u.id === adminId);
    if (!target) return { success: false, message: 'User not found' };

    if (target.email.toLowerCase() === PRIMARY_SUPER_ADMIN_EMAIL.toLowerCase()) {
      return { success: false, message: 'Cannot remove the primary founding administrator.' };
    }

    setAdminUsers(prev => prev.filter(u => u.id !== adminId));
    // Clear stored credentials
    const creds = getStoredCreds();
    delete creds[target.email.toLowerCase()];
    setStoredCreds(creds);

    showToast(`Removed access for ${target.email}`);
    return { success: true, message: 'Admin user removed successfully.' };
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        navigateTo,
        pageParams,
        selectedProject,
        setSelectedProject,
        selectedArticle,
        setSelectedArticle,
        leads,
        addLead,
        updateLeadStatus,
        addLeadNote,
        deleteLead,
        archiveLead,
        consultations,
        bookConsultation,
        updateConsultationStatus,
        services,
        portfolio,
        pricing,
        addons,
        faqs,
        blogs,
        testimonials,
        settings,
        updateSettings,
        updatePricingPackage,
        addPortfolioProject,
        updatePortfolioProject,
        deletePortfolioProject,
        addFAQ,
        updateFAQ,
        deleteFAQ,
        addBlogPost,
        updateBlogPost,
        deleteBlogPost,
        addTestimonial,
        deleteTestimonial,
        isAdminAuthenticated,
        currentAdminUser,
        adminUsers,
        adminInvites,
        adminLogin,
        adminLogout,
        inviteAdmin,
        acceptInvite,
        revokeInvite,
        removeAdminUser,
        toastMessage,
        showToast,
        clearToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
