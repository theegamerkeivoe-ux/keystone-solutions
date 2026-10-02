import React, { useState, useEffect } from 'react';
import { useApp, PRIMARY_SUPER_ADMIN_EMAIL } from '../context/AppContext';
import { Lead, LeadStatus, PortfolioProject, PricingPackage, FAQItem, BlogPost, Testimonial, AdminRole, AdminUser, AdminInvite } from '../types';
import {
  Users,
  Search,
  Filter,
  FileText,
  DollarSign,
  CalendarCheck,
  CheckCircle,
  XCircle,
  Clock,
  Shield,
  Trash2,
  Archive,
  Phone,
  Mail,
  MessageCircle,
  ExternalLink,
  Plus,
  Edit2,
  Lock,
  LogOut,
  Save,
  Globe,
  Settings as SettingsIcon,
  Tag,
  UserPlus,
  ShieldCheck,
  Copy,
  Check,
  Key
} from 'lucide-react';

export const AdminDashboardPage: React.FC = () => {
  const {
    leads,
    updateLeadStatus,
    addLeadNote,
    deleteLead,
    archiveLead,
    consultations,
    updateConsultationStatus,
    portfolio,
    addPortfolioProject,
    updatePortfolioProject,
    deletePortfolioProject,
    pricing,
    updatePricingPackage,
    addons,
    faqs,
    addFAQ,
    updateFAQ,
    deleteFAQ,
    blogs,
    addBlogPost,
    updateBlogPost,
    deleteBlogPost,
    testimonials,
    addTestimonial,
    deleteTestimonial,
    settings,
    updateSettings,
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
    pageParams,
    showToast,
    navigateTo
  } = useApp();

  // Authentication State
  const [authMode, setAuthMode] = useState<'login' | 'invite'>(() => {
    return pageParams.invite ? 'invite' : 'login';
  });
  const [authEmail, setAuthEmail] = useState(PRIMARY_SUPER_ADMIN_EMAIL);
  const [authPassword, setAuthPassword] = useState('');
  const [authErrorMsg, setAuthErrorMsg] = useState('');

  // Accept Invite State
  const [inviteTokenInput, setInviteTokenInput] = useState(pageParams.invite || '');
  const [inviteNameInput, setInviteNameInput] = useState('');
  const [invitePasswordInput, setInvitePasswordInput] = useState('');
  const [inviteErrorMsg, setInviteErrorMsg] = useState('');

  // Team Management State
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [newAdminName, setNewAdminName] = useState('');
  const [newAdminRole, setNewAdminRole] = useState<AdminRole>('ADMIN');
  const [lastGeneratedInvite, setLastGeneratedInvite] = useState<AdminInvite | null>(null);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  // Tabs in Dashboard
  const [activeTab, setActiveTab] = useState<'leads' | 'consultations' | 'portfolio' | 'pricing' | 'content' | 'settings' | 'team'>('leads');

  // Leads Filtering & Search
  const [leadSearch, setLeadSearch] = useState('');
  const [leadStatusFilter, setLeadStatusFilter] = useState<string>('ALL');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [newNoteInput, setNewNoteInput] = useState('');

  // Editable Settings form state
  const [settingsForm, setSettingsForm] = useState(settings);

  // Editable Pricing state
  const [editingPricingId, setEditingPricingId] = useState<string | null>(null);

  // Handle Login Submit
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = adminLogin(authEmail, authPassword);
    if (!result.success) {
      setAuthErrorMsg(result.message);
    } else {
      setAuthErrorMsg('');
      setAuthPassword('');
    }
  };

  // Handle Accept Invite Submit
  const handleAcceptInviteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = acceptInvite(inviteTokenInput, invitePasswordInput, inviteNameInput);
    if (!result.success) {
      setInviteErrorMsg(result.message);
    } else {
      setInviteErrorMsg('');
      setInvitePasswordInput('');
    }
  };

  // Handle Generate Invite
  const handleCreateInvite = (e: React.FormEvent) => {
    e.preventDefault();
    const result = inviteAdmin(newAdminEmail, newAdminRole, newAdminName);
    if (result.success && result.invite) {
      setLastGeneratedInvite(result.invite);
      setNewAdminEmail('');
      setNewAdminName('');
    } else {
      showToast(result.message);
    }
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    showToast('Copied to clipboard');
    setTimeout(() => setCopiedType(null), 3000);
  };

  // If not authenticated, show secure access gate
  if (!isAdminAuthenticated) {
    return (
      <div className="pt-32 pb-24 min-h-screen flex items-center justify-center px-4 bg-[#0D0F12]">
        <div className="bg-[#11141A] border border-stone-800 rounded-lg p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-6">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto mb-3">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white uppercase tracking-wider font-display">
              Keystone Operations Console
            </h2>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 mt-1 rounded bg-stone-900 border border-stone-800 text-[10px] uppercase font-mono text-emerald-400 tracking-wider">
              <span>●</span> PRIVATE ADMINISTRATIVE BACKEND
            </div>
            <p className="text-xs text-stone-400 mt-2">
              Access is restricted. Only the founding owner (<span className="text-stone-300 font-mono">{PRIMARY_SUPER_ADMIN_EMAIL}</span>) and explicitly invited admins can log in.
            </p>
          </div>

          {/* Toggle between Sign In and Accept Invite */}
          <div className="flex border-b border-stone-800 text-xs">
            <button
              onClick={() => { setAuthMode('login'); setAuthErrorMsg(''); }}
              className={`flex-1 py-2 font-bold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
                authMode === 'login'
                  ? 'border-emerald-500 text-emerald-400'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              Administrator Sign In
            </button>
            <button
              onClick={() => { setAuthMode('invite'); setInviteErrorMsg(''); }}
              className={`flex-1 py-2 font-bold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
                authMode === 'invite'
                  ? 'border-emerald-500 text-emerald-400'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              Accept Invitation
            </button>
          </div>

          {authMode === 'login' ? (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase font-mono text-stone-300 mb-1">
                  Administrator Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="admin@keystonesolutions.co.ke"
                  value={authEmail}
                  onChange={e => {
                    setAuthEmail(e.target.value);
                    setAuthErrorMsg('');
                  }}
                  className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500 font-mono"
                />
                <span className="text-[10px] text-stone-500 mt-1 block">
                  Founding Owner: <strong className="text-emerald-400 font-mono">{PRIMARY_SUPER_ADMIN_EMAIL}</strong>
                </span>
              </div>

              <div>
                <label className="block text-xs uppercase font-mono text-stone-300 mb-1">
                  Master Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="Enter your password..."
                  value={authPassword}
                  onChange={e => {
                    setAuthPassword(e.target.value);
                    setAuthErrorMsg('');
                  }}
                  className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500 font-mono"
                />
                <span className="text-[10px] text-stone-500 mt-1 block italic">
                  *First time? Any master password you enter here will set your administrator credential.
                </span>
              </div>

              {authErrorMsg && (
                <div className="p-3 bg-red-950/60 border border-red-800/80 rounded text-xs text-red-300 leading-snug">
                  {authErrorMsg}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs uppercase tracking-wider py-3 rounded-sm transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
              >
                <Key className="w-4 h-4" />
                <span>Authenticate & Open Console</span>
              </button>
            </form>
          ) : (
            <form onSubmit={handleAcceptInviteSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase font-mono text-stone-300 mb-1">
                  Invitation Code or Token
                </label>
                <input
                  type="text"
                  required
                  placeholder="INV-XXXXXX-XXXX"
                  value={inviteTokenInput}
                  onChange={e => {
                    setInviteTokenInput(e.target.value);
                    setInviteErrorMsg('');
                  }}
                  className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500 font-mono text-center uppercase tracking-wider"
                />
                <span className="text-[10px] text-stone-500 mt-1 block">
                  Provided by the primary administrator ({PRIMARY_SUPER_ADMIN_EMAIL})
                </span>
              </div>

              <div>
                <label className="block text-xs uppercase font-mono text-stone-300 mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mary Atieno"
                  value={inviteNameInput}
                  onChange={e => setInviteNameInput(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-mono text-stone-300 mb-1">
                  Set Your Password (min 6 characters)
                </label>
                <input
                  type="password"
                  required
                  minLength={6}
                  placeholder="Create a strong password..."
                  value={invitePasswordInput}
                  onChange={e => {
                    setInvitePasswordInput(e.target.value);
                    setInviteErrorMsg('');
                  }}
                  className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500 font-mono"
                />
              </div>

              {inviteErrorMsg && (
                <div className="p-3 bg-red-950/60 border border-red-800/80 rounded text-xs text-red-300 leading-snug">
                  {inviteErrorMsg}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs uppercase tracking-wider py-3 rounded-sm transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Activate Administrator Access</span>
              </button>
            </form>
          )}

          <div className="border-t border-stone-800/80 pt-4 flex items-center justify-between text-xs text-stone-500">
            <button
              onClick={() => navigateTo('home')}
              className="text-stone-400 hover:text-white transition-colors cursor-pointer text-[11px]"
            >
              ← Return to Keystone Website
            </button>
            <span className="text-[10px] text-stone-600 font-mono">
              Confidential Console
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard Statistics
  const totalLeads = leads.length;
  const newLeads = leads.filter(l => l.status === 'NEW').length;
  const inConsultation = leads.filter(l => l.status === 'CONSULTATION').length;
  const proposalsSent = leads.filter(l => l.status === 'PROPOSAL SENT').length;
  const projectsWon = leads.filter(l => l.status === 'WON').length;
  const projectsLost = leads.filter(l => l.status === 'LOST').length;

  // Filtered Leads
  const filteredLeads = leads.filter(l => {
    const matchesSearch =
      l.fullName.toLowerCase().includes(leadSearch.toLowerCase()) ||
      l.organizationName.toLowerCase().includes(leadSearch.toLowerCase()) ||
      l.projectType.toLowerCase().includes(leadSearch.toLowerCase()) ||
      l.email.toLowerCase().includes(leadSearch.toLowerCase());

    const matchesStatus = leadStatusFilter === 'ALL' || l.status === leadStatusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: LeadStatus) => {
    switch (status) {
      case 'NEW':
        return 'bg-blue-950 text-blue-300 border-blue-800';
      case 'CONTACTED':
        return 'bg-purple-950 text-purple-300 border-purple-800';
      case 'CONSULTATION':
        return 'bg-amber-950 text-amber-300 border-amber-800';
      case 'PROPOSAL SENT':
        return 'bg-indigo-950 text-indigo-300 border-indigo-800';
      case 'WON':
        return 'bg-emerald-950 text-emerald-300 border-emerald-800';
      case 'LOST':
        return 'bg-stone-900 text-stone-400 border-stone-700';
      default:
        return 'bg-stone-900 text-stone-300';
    }
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(settingsForm);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#0A0C0F] text-stone-200">
      {/* Top Admin Header Bar */}
      <div className="bg-[#101318] border-b border-stone-800 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-bold text-white tracking-wide uppercase font-display">
                  Keystone Executive Console
                </h1>
                {currentAdminUser && (
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase border ${
                    currentAdminUser.role === 'SUPER_ADMIN'
                      ? 'bg-amber-950/80 text-amber-300 border-amber-700/60'
                      : 'bg-emerald-950 text-emerald-400 border-emerald-800'
                  }`}>
                    {currentAdminUser.role === 'SUPER_ADMIN' ? 'Owner / Super Admin' : currentAdminUser.role}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-stone-400">
                Logged in: <strong className="text-stone-300 font-mono">{currentAdminUser?.email || PRIMARY_SUPER_ADMIN_EMAIL}</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigateTo('home')}
              className="text-xs text-stone-400 hover:text-white px-3 py-1.5 rounded border border-stone-800 bg-stone-900 flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>View Public Site</span>
            </button>
            <button
              onClick={adminLogout}
              className="text-xs text-red-400 hover:text-red-300 px-3 py-1.5 rounded border border-red-900/60 bg-red-950/40 flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Lock Console</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Metric Statistics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          <div className="bg-[#11141A] border border-stone-800 rounded p-4">
            <span className="text-[10px] uppercase font-bold text-stone-400 block">Total Inquiries</span>
            <span className="text-2xl font-extrabold text-white mt-1 block font-mono tabular-nums">
              {totalLeads}
            </span>
          </div>

          <div className="bg-[#11141A] border border-stone-800 rounded p-4">
            <span className="text-[10px] uppercase font-bold text-blue-400 block">New Leads</span>
            <span className="text-2xl font-extrabold text-blue-400 mt-1 block font-mono tabular-nums">
              {newLeads}
            </span>
          </div>

          <div className="bg-[#11141A] border border-stone-800 rounded p-4">
            <span className="text-[10px] uppercase font-bold text-amber-400 block">Consultations</span>
            <span className="text-2xl font-extrabold text-amber-400 mt-1 block font-mono tabular-nums">
              {inConsultation}
            </span>
          </div>

          <div className="bg-[#11141A] border border-stone-800 rounded p-4">
            <span className="text-[10px] uppercase font-bold text-indigo-400 block">Proposals Sent</span>
            <span className="text-2xl font-extrabold text-indigo-400 mt-1 block font-mono tabular-nums">
              {proposalsSent}
            </span>
          </div>

          <div className="bg-[#11141A] border border-stone-800 rounded p-4">
            <span className="text-[10px] uppercase font-bold text-emerald-400 block">Projects Won</span>
            <span className="text-2xl font-extrabold text-emerald-400 mt-1 block font-mono tabular-nums">
              {projectsWon}
            </span>
          </div>

          <div className="bg-[#11141A] border border-stone-800 rounded p-4">
            <span className="text-[10px] uppercase font-bold text-stone-500 block">Lost / Closed</span>
            <span className="text-2xl font-extrabold text-stone-400 mt-1 block font-mono tabular-nums">
              {projectsLost}
            </span>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-stone-800 pb-3 mb-6 overflow-x-auto scrollbar-none text-xs">
          <button
            onClick={() => setActiveTab('leads')}
            className={`px-4 py-2 rounded-sm font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === 'leads'
                ? 'bg-emerald-600 text-stone-950'
                : 'bg-stone-900 text-stone-300 hover:text-white'
            }`}
          >
            Leads Pipeline ({totalLeads})
          </button>
          <button
            onClick={() => setActiveTab('consultations')}
            className={`px-4 py-2 rounded-sm font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === 'consultations'
                ? 'bg-emerald-600 text-stone-950'
                : 'bg-stone-900 text-stone-300 hover:text-white'
            }`}
          >
            Consultations ({consultations.length})
          </button>
          <button
            onClick={() => setActiveTab('portfolio')}
            className={`px-4 py-2 rounded-sm font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === 'portfolio'
                ? 'bg-emerald-600 text-stone-950'
                : 'bg-stone-900 text-stone-300 hover:text-white'
            }`}
          >
            Manage Portfolio ({portfolio.length})
          </button>
          <button
            onClick={() => setActiveTab('pricing')}
            className={`px-4 py-2 rounded-sm font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === 'pricing'
                ? 'bg-emerald-600 text-stone-950'
                : 'bg-stone-900 text-stone-300 hover:text-white'
            }`}
          >
            Manage Pricing & Packages
          </button>
          <button
            onClick={() => setActiveTab('content')}
            className={`px-4 py-2 rounded-sm font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === 'content'
                ? 'bg-emerald-600 text-stone-950'
                : 'bg-stone-900 text-stone-300 hover:text-white'
            }`}
          >
            Manage FAQ & Insights
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-2 rounded-sm font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === 'settings'
                ? 'bg-emerald-600 text-stone-950'
                : 'bg-stone-900 text-stone-300 hover:text-white'
            }`}
          >
            Company & Contact Settings
          </button>
          <button
            onClick={() => setActiveTab('team')}
            className={`px-4 py-2 rounded-sm font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'team'
                ? 'bg-emerald-600 text-stone-950'
                : 'bg-stone-900 text-stone-300 hover:text-white'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Admin Team & Invites ({adminUsers.length})</span>
          </button>
        </div>

        {/* TAB 1: LEADS MANAGEMENT */}
        {activeTab === 'leads' && (
          <div className="space-y-6">
            {/* Filter and Search Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#11141A] p-4 rounded-lg border border-stone-800">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by client, organization, or project..."
                  value={leadSearch}
                  onChange={e => setLeadSearch(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-700/80 rounded pl-9 pr-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto text-xs">
                <span className="text-stone-400 text-[11px] uppercase font-bold shrink-0">Status:</span>
                {['ALL', 'NEW', 'CONTACTED', 'CONSULTATION', 'PROPOSAL SENT', 'WON', 'LOST'].map(status => (
                  <button
                    key={status}
                    onClick={() => setLeadStatusFilter(status)}
                    className={`px-2.5 py-1 rounded text-[11px] font-bold whitespace-nowrap transition-colors cursor-pointer ${
                      leadStatusFilter === status
                        ? 'bg-emerald-700 text-white'
                        : 'bg-stone-900 text-stone-400 hover:text-white border border-stone-800'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Leads Table */}
            <div className="bg-[#11141A] border border-stone-800 rounded-lg overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-900/90 border-b border-stone-800 text-stone-400 uppercase tracking-wider text-[10px]">
                      <th className="py-3 px-4">Client Name</th>
                      <th className="py-3 px-4">Organization</th>
                      <th className="py-3 px-4">Project / Sector</th>
                      <th className="py-3 px-4">Budget</th>
                      <th className="py-3 px-4">Date</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-800/60">
                    {filteredLeads.length > 0 ? (
                      filteredLeads.map(lead => (
                        <tr key={lead.id} className="hover:bg-stone-900/40 transition-colors">
                          <td className="py-3.5 px-4 font-bold text-white">
                            {lead.fullName}
                            <div className="text-[11px] text-stone-400 font-normal">{lead.email}</div>
                          </td>
                          <td className="py-3.5 px-4 text-stone-200">
                            {lead.organizationName}
                            <div className="text-[10px] text-stone-500">{lead.organizationType}</div>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="font-semibold text-emerald-400">{lead.projectType}</span>
                          </td>
                          <td className="py-3.5 px-4 text-stone-300 font-mono text-[11px]">
                            {lead.budget}
                          </td>
                          <td className="py-3.5 px-4 text-stone-400 text-[11px]">
                            {new Date(lead.createdAt).toLocaleDateString()}
                          </td>
                          <td className="py-3.5 px-4">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${getStatusBadge(
                                lead.status
                              )}`}
                            >
                              {lead.status}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-right space-x-2">
                            <button
                              onClick={() => setSelectedLead(lead)}
                              className="bg-stone-800 hover:bg-stone-700 text-stone-200 px-3 py-1 rounded text-[11px] font-bold cursor-pointer"
                            >
                              Open Details
                            </button>
                            <button
                              onClick={() => deleteLead(lead.id)}
                              className="text-stone-500 hover:text-red-400 p-1 cursor-pointer"
                              title="Delete Lead"
                            >
                              <Trash2 className="w-3.5 h-3.5 inline" />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={7} className="py-10 text-center text-stone-500 text-xs">
                          No leads matching current search or status filter.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CONSULTATIONS BOOKINGS */}
        {activeTab === 'consultations' && (
          <div className="bg-[#11141A] border border-stone-800 rounded-lg p-6 space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">
              Scheduled Discovery Calls & Demos
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-stone-800 text-[10px] text-stone-400 uppercase">
                    <th className="py-2.5 px-3">Date & Time Slot</th>
                    <th className="py-2.5 px-3">Client & Org</th>
                    <th className="py-2.5 px-3">Consultation Topic</th>
                    <th className="py-2.5 px-3">Contact</th>
                    <th className="py-2.5 px-3">Status</th>
                    <th className="py-2.5 px-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-800/60 text-stone-300">
                  {consultations.map(c => (
                    <tr key={c.id}>
                      <td className="py-3 px-3 font-semibold text-white">
                        {c.date}
                        <div className="text-[11px] text-stone-400">{c.timeSlot}</div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="font-bold text-white">{c.fullName}</div>
                        <div className="text-stone-400 text-[11px]">{c.organizationName}</div>
                      </td>
                      <td className="py-3 px-3 text-emerald-400 font-medium">
                        {c.consultationType}
                        {c.notes && <div className="text-[10px] text-stone-400 italic line-clamp-1">{c.notes}</div>}
                      </td>
                      <td className="py-3 px-3 font-mono text-[11px]">
                        <div>{c.email}</div>
                        <div>{c.phone}</div>
                      </td>
                      <td className="py-3 px-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          c.status === 'SCHEDULED' ? 'bg-amber-950 text-amber-300 border border-amber-800' : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                        }`}>
                          {c.status}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right space-x-2">
                        {c.status === 'SCHEDULED' ? (
                          <button
                            onClick={() => updateConsultationStatus(c.id, 'COMPLETED')}
                            className="bg-emerald-700 hover:bg-emerald-600 text-stone-950 font-bold px-2.5 py-1 rounded text-[10px] cursor-pointer"
                          >
                            Mark Completed
                          </button>
                        ) : (
                          <span className="text-stone-500 text-[11px]">Done</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: PORTFOLIO MANAGEMENT */}
        {activeTab === 'portfolio' && (
          <div className="bg-[#11141A] border border-stone-800 rounded-lg p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <div>
                <h3 className="text-base font-bold text-white uppercase tracking-wider">
                  Portfolio CMS
                </h3>
                <p className="text-xs text-stone-400">Add, edit, or remove project showcases and concept blueprints.</p>
              </div>
              <button
                onClick={() => {
                  const name = prompt('Project Name:');
                  if (!name) return;
                  const industry = prompt('Industry (Education, Healthcare, Business, Organizations, Portals, Digital Systems):') as any || 'Business';
                  const shortDescription = prompt('Short description:') || 'Modern digital solution.';
                  addPortfolioProject({
                    name,
                    industry,
                    projectType: 'Web System',
                    isConcept: true,
                    shortDescription,
                    overview: shortDescription,
                    challenge: 'Operational challenge.',
                    solution: 'Engineered web platform.',
                    features: ['Responsive UI', 'Secure architecture'],
                    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
                    resultsNote: 'Project outcomes will be added when available.',
                    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
                  });
                }}
                className="bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs uppercase tracking-wider px-3.5 py-2 rounded flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add New Project</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {portfolio.map(proj => (
                <div key={proj.id} className="bg-stone-900/70 border border-stone-800 rounded p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-emerald-400 uppercase bg-emerald-950 px-2 py-0.5 rounded">
                        {proj.industry}
                      </span>
                      {proj.isConcept && (
                        <span className="text-[9px] text-stone-400 font-bold uppercase">
                          Concept
                        </span>
                      )}
                    </div>
                    <h4 className="font-bold text-white text-sm mb-1">{proj.name}</h4>
                    <p className="text-xs text-stone-400 line-clamp-2 mb-3">{proj.shortDescription}</p>
                  </div>

                  <div className="pt-3 border-t border-stone-800 flex justify-between items-center text-xs">
                    <button
                      onClick={() => {
                        const newName = prompt('Update Project Name:', proj.name);
                        if (newName) updatePortfolioProject(proj.id, { name: newName });
                      }}
                      className="text-stone-300 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      <Edit2 className="w-3 h-3" /> Edit
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Delete project "${proj.name}"?`)) deletePortfolioProject(proj.id);
                      }}
                      className="text-stone-500 hover:text-red-400 cursor-pointer"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: PRICING & PACKAGES CMS */}
        {activeTab === 'pricing' && (
          <div className="bg-[#11141A] border border-stone-800 rounded-lg p-6 space-y-6">
            <div className="border-b border-stone-800 pb-3">
              <h3 className="text-base font-bold text-white uppercase tracking-wider">
                Pricing Packages & Modular Add-ons CMS
              </h3>
              <p className="text-xs text-stone-400">
                Update packages, starting rates, and add-on pricing directly. Changes reflect immediately across the public website.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricing.map(pkg => (
                <div key={pkg.id} className="bg-stone-900/80 border border-stone-800 rounded p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">{pkg.name}</span>
                    {pkg.popular && <span className="text-[10px] text-emerald-400 font-bold uppercase">Popular</span>}
                  </div>

                  <div>
                    <label className="text-[10px] text-stone-400 uppercase block mb-1">Starting Price:</label>
                    <input
                      type="text"
                      defaultValue={pkg.startingPrice}
                      onBlur={e => updatePricingPackage(pkg.id, { startingPrice: e.target.value })}
                      className="w-full bg-stone-950 border border-stone-700 rounded px-2.5 py-1.5 text-xs text-emerald-400 font-bold focus:outline-none focus:border-emerald-500 font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-stone-400 uppercase block mb-1">Description:</label>
                    <textarea
                      rows={3}
                      defaultValue={pkg.description}
                      onBlur={e => updatePricingPackage(pkg.id, { description: e.target.value })}
                      className="w-full bg-stone-950 border border-stone-700 rounded px-2.5 py-1.5 text-xs text-stone-300 focus:outline-none focus:border-emerald-500"
                    ></textarea>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-stone-800 pt-6">
              <h4 className="text-sm font-bold text-white uppercase mb-3">Add-ons Catalog ({addons.length})</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                {addons.map(addon => (
                  <div key={addon.id} className="p-3 bg-stone-900 border border-stone-800 rounded">
                    <div className="font-semibold text-white">{addon.name}</div>
                    <div className="font-mono text-emerald-400 font-bold mt-1">{addon.price}</div>
                    <div className="text-[10px] text-stone-500 mt-1">{addon.category}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: CONTENT (FAQ & BLOG) */}
        {activeTab === 'content' && (
          <div className="bg-[#11141A] border border-stone-800 rounded-lg p-6 space-y-8">
            {/* FAQ CMS */}
            <div>
              <div className="flex items-center justify-between border-b border-stone-800 pb-3 mb-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  FAQ Manager ({faqs.length} Questions)
                </h3>
                <button
                  onClick={() => {
                    const q = prompt('New Question:');
                    if (!q) return;
                    const a = prompt('Answer:');
                    if (!a) return;
                    addFAQ({ question: q, answer: a });
                  }}
                  className="bg-stone-900 border border-stone-700 text-stone-200 text-xs px-3 py-1.5 rounded hover:text-white"
                >
                  + Add FAQ
                </button>
              </div>

              <div className="space-y-2">
                {faqs.map(faq => (
                  <div key={faq.id} className="p-3 bg-stone-900/60 border border-stone-800 rounded flex justify-between items-start gap-4">
                    <div>
                      <div className="font-bold text-white text-xs">{faq.question}</div>
                      <div className="text-[11px] text-stone-400 mt-0.5 line-clamp-1">{faq.answer}</div>
                    </div>
                    <button
                      onClick={() => deleteFAQ(faq.id)}
                      className="text-stone-500 hover:text-red-400 text-xs p-1"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials CMS */}
            <div className="border-t border-stone-800 pt-6">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3 mb-4">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                    Testimonials Manager
                  </h3>
                  <p className="text-[11px] text-stone-400">Strictly client-verified entries only.</p>
                </div>
                <button
                  onClick={() => {
                    const clientName = prompt('Client Name:');
                    if (!clientName) return;
                    const organization = prompt('Organization:');
                    const role = prompt('Role:');
                    const quote = prompt('Quote:');
                    if (!quote) return;
                    addTestimonial({
                      clientName,
                      organization: organization || '',
                      role: role || '',
                      quote,
                      published: true
                    });
                  }}
                  className="bg-emerald-600 text-stone-950 font-bold text-xs px-3 py-1.5 rounded"
                >
                  + Add Verified Client Story
                </button>
              </div>

              {testimonials.length === 0 ? (
                <div className="text-xs text-stone-400 italic bg-stone-900/40 p-4 rounded text-center">
                  No testimonials currently published. The public site displays: "Client stories will appear here as we grow."
                </div>
              ) : (
                <div className="space-y-2">
                  {testimonials.map(t => (
                    <div key={t.id} className="p-3 bg-stone-900 rounded border border-stone-800 flex justify-between items-center text-xs">
                      <div>
                        <span className="font-bold text-white">{t.clientName}</span> ({t.organization})
                        <p className="text-stone-400 italic text-[11px]">"{t.quote}"</p>
                      </div>
                      <button onClick={() => deleteTestimonial(t.id)} className="text-stone-500 hover:text-red-400">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 6: SETTINGS CMS */}
        {activeTab === 'settings' && (
          <form onSubmit={handleSaveSettings} className="bg-[#11141A] border border-stone-800 rounded-lg p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-800 pb-3">
              <h3 className="text-base font-bold text-white uppercase tracking-wider">
                Centralized Business & Contact Settings
              </h3>
              <p className="text-xs text-stone-400">
                All business contact numbers, locations, and brand lines are controlled here. No hardcoded values.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-stone-300 font-semibold mb-1 uppercase">Official Email</label>
                <input
                  type="email"
                  value={settingsForm.email}
                  onChange={e => setSettingsForm({ ...settingsForm, email: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-stone-300 font-semibold mb-1 uppercase">Official Telephone</label>
                <input
                  type="text"
                  value={settingsForm.phone}
                  onChange={e => setSettingsForm({ ...settingsForm, phone: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-stone-300 font-semibold mb-1 uppercase">WhatsApp Number (For Direct Click-to-Chat)</label>
                <input
                  type="text"
                  value={settingsForm.whatsApp}
                  onChange={e => setSettingsForm({ ...settingsForm, whatsApp: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2 text-white focus:outline-none focus:border-emerald-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-stone-300 font-semibold mb-1 uppercase">Physical Location</label>
                <input
                  type="text"
                  value={settingsForm.location}
                  onChange={e => setSettingsForm({ ...settingsForm, location: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-stone-300 font-semibold mb-1 uppercase">Operating Region Note</label>
                <input
                  type="text"
                  value={settingsForm.operatingRegion}
                  onChange={e => setSettingsForm({ ...settingsForm, operatingRegion: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-stone-300 font-semibold mb-1 uppercase">Core Brand Statement</label>
                <input
                  type="text"
                  value={settingsForm.supportingLine}
                  onChange={e => setSettingsForm({ ...settingsForm, supportingLine: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-sm transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                <Save className="w-4 h-4" />
                <span>Save Business Configurations</span>
              </button>
            </div>
          </form>
        )}

        {/* TAB 7: ADMIN TEAM & INVITATION ACCESS */}
        {activeTab === 'team' && (
          <div className="space-y-8">
            <div className="bg-[#11141A] border border-stone-800 rounded-lg p-6 sm:p-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-4">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    Role-Based Access Control (RBAC)
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                    Admin Team & Access Management
                  </h2>
                  <p className="text-xs text-stone-400 mt-1 max-w-2xl">
                    This backend is strictly private and hidden from the public. Only the founding owner (<span className="text-emerald-400 font-mono">{PRIMARY_SUPER_ADMIN_EMAIL}</span>) and team members you explicitly invite can log in.
                  </p>
                </div>
              </div>

              {/* Founding Owner Badge Card */}
              <div className="p-4 bg-emerald-950/20 border border-emerald-700/40 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-stone-950 font-extrabold flex items-center justify-center text-sm shadow-md">
                    👑
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">Founding Administrator (Primary Owner)</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-600 text-stone-950">
                        SUPER ADMIN
                      </span>
                    </div>
                    <div className="text-xs font-mono text-emerald-400 mt-0.5">
                      {PRIMARY_SUPER_ADMIN_EMAIL}
                    </div>
                  </div>
                </div>
                <div className="text-[11px] text-stone-400 sm:text-right">
                  <span className="text-emerald-400 font-semibold">Active Master Authority</span>
                  <div className="text-stone-500">Only you can invite new admins</div>
                </div>
              </div>
            </div>

            {/* Invite New Administrator Module */}
            <div className="bg-[#11141A] border border-stone-800 rounded-lg p-6 sm:p-8 space-y-6">
              <div className="border-b border-stone-800 pb-3 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <UserPlus className="w-4 h-4 text-emerald-400" />
                    Invite Someone to Be an Admin
                  </h3>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Generate an authorized invitation code and link for a colleague or partner.
                  </p>
                </div>
              </div>

              <form onSubmit={handleCreateInvite} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                <div className="md:col-span-4">
                  <label className="block text-xs uppercase font-mono text-stone-300 mb-1">
                    New Admin Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="partner@keystonesolutions.co.ke"
                    value={newAdminEmail}
                    onChange={e => setNewAdminEmail(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500 font-mono"
                  />
                </div>

                <div className="md:col-span-3">
                  <label className="block text-xs uppercase font-mono text-stone-300 mb-1">
                    Colleague Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. David Kimani"
                    value={newAdminName}
                    onChange={e => setNewAdminName(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="md:col-span-3">
                  <label className="block text-xs uppercase font-mono text-stone-300 mb-1">
                    Assigned Role
                  </label>
                  <select
                    value={newAdminRole}
                    onChange={e => setNewAdminRole(e.target.value as AdminRole)}
                    className="w-full bg-stone-900 border border-stone-700 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="ADMIN">Operations Admin (Full CRM & CMS)</option>
                    <option value="EDITOR">Content Editor (Portfolio & CMS)</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs uppercase tracking-wider py-2.5 rounded-sm transition-all cursor-pointer shadow-md flex items-center justify-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Generate Invite</span>
                  </button>
                </div>
              </form>

              {/* Newly Generated Invite Banner */}
              {lastGeneratedInvite && (
                <div className="bg-emerald-950/40 border border-emerald-600/60 rounded-lg p-5 space-y-3 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4" />
                      Invitation Ready for {lastGeneratedInvite.email}
                    </span>
                    <span className="text-[10px] text-stone-400 font-mono">
                      Expires in 7 days
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-stone-950 rounded border border-stone-800">
                      <span className="text-[10px] text-stone-400 uppercase block mb-1">Invitation Code:</span>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-emerald-300 font-bold text-sm tracking-wider">
                          {lastGeneratedInvite.token}
                        </span>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(lastGeneratedInvite.token, 'token')}
                          className="text-[11px] text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 px-2.5 py-1 rounded cursor-pointer"
                        >
                          {copiedType === 'token' ? 'Copied!' : 'Copy Code'}
                        </button>
                      </div>
                    </div>

                    <div className="p-3 bg-stone-950 rounded border border-stone-800">
                      <span className="text-[10px] text-stone-400 uppercase block mb-1">Direct Activation Link:</span>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-stone-300 text-[11px] truncate">
                          {window.location.origin + '?invite=' + lastGeneratedInvite.token}
                        </span>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(window.location.origin + '?invite=' + lastGeneratedInvite.token, 'link')}
                          className="text-[11px] text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 px-2.5 py-1 rounded shrink-0 cursor-pointer"
                        >
                          {copiedType === 'link' ? 'Copied!' : 'Copy Link'}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="pt-1 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        const msg = `Hello! You have been invited by Keystone Solutions to join the private administration console. Please visit: ${window.location.origin}?invite=${lastGeneratedInvite.token} and use invitation code: ${lastGeneratedInvite.token} to set your password and activate your admin access.`;
                        copyToClipboard(msg, 'message');
                      }}
                      className="text-xs text-stone-300 hover:text-white underline cursor-pointer"
                    >
                      {copiedType === 'message' ? '✓ Copied Message to Clipboard!' : 'Copy Formatted WhatsApp / Email Invitation Message'}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* List of Authorized Administrators */}
            <div className="bg-[#11141A] border border-stone-800 rounded-lg p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-400" />
                  Authorized Administrative Accounts ({adminUsers.length})
                </h3>
              </div>

              <div className="overflow-x-auto text-xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-stone-800 text-[10px] uppercase text-stone-400 font-mono">
                      <th className="py-2.5 px-3">Administrator</th>
                      <th className="py-2.5 px-3">Assigned Role</th>
                      <th className="py-2.5 px-3">Status</th>
                      <th className="py-2.5 px-3">Created / Invited</th>
                      <th className="py-2.5 px-3">Last Active</th>
                      <th className="py-2.5 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-800/60 text-stone-300">
                    {adminUsers.map(user => {
                      const isSuper = user.email.toLowerCase() === PRIMARY_SUPER_ADMIN_EMAIL.toLowerCase();
                      return (
                        <tr key={user.id} className="hover:bg-stone-900/50">
                          <td className="py-3 px-3">
                            <div className="flex items-center gap-2.5">
                              <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[11px] ${
                                isSuper ? 'bg-emerald-600 text-stone-950 font-extrabold' : 'bg-stone-800 text-stone-200'
                              }`}>
                                {user.name ? user.name.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
                              </div>
                              <div>
                                <div className="font-bold text-white flex items-center gap-1.5">
                                  <span>{user.name || user.email.split('@')[0]}</span>
                                  {isSuper && <span className="text-[10px] text-amber-400">★ Owner</span>}
                                </div>
                                <div className="text-[11px] text-stone-400 font-mono">{user.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-3">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider font-mono border ${
                              user.role === 'SUPER_ADMIN'
                                ? 'bg-emerald-950 text-emerald-400 border-emerald-700'
                                : user.role === 'ADMIN'
                                ? 'bg-blue-950 text-blue-300 border-blue-800'
                                : 'bg-purple-950 text-purple-300 border-purple-800'
                            }`}>
                              {user.role.replace('_', ' ')}
                            </span>
                          </td>
                          <td className="py-3 px-3">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                              user.status === 'ACTIVE'
                                ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800'
                                : 'bg-amber-950/80 text-amber-400 border border-amber-800'
                            }`}>
                              {user.status}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-stone-400 text-[11px]">
                            {new Date(user.createdAt).toLocaleDateString()}
                          </td>
                          <td className="py-3 px-3 text-stone-400 text-[11px]">
                            {user.lastLoginAt ? new Date(user.lastLoginAt).toLocaleDateString() : 'Never'}
                          </td>
                          <td className="py-3 px-3 text-right">
                            {isSuper ? (
                              <span className="text-[10px] text-stone-500 uppercase font-mono">Protected</span>
                            ) : (
                              <button
                                type="button"
                                onClick={() => {
                                  removeAdminUser(user.id);
                                }}
                                className="text-red-400 hover:text-red-300 hover:underline text-[11px] cursor-pointer"
                              >
                                Remove Access
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pending Invitations Table */}
            {adminInvites.filter(i => i.status === 'PENDING').length > 0 && (
              <div className="bg-[#11141A] border border-stone-800 rounded-lg p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                  <h3 className="text-base font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Pending Admin Invitations ({adminInvites.filter(i => i.status === 'PENDING').length})
                  </h3>
                </div>

                <div className="overflow-x-auto text-xs">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-stone-800 text-[10px] uppercase text-stone-400 font-mono">
                        <th className="py-2 px-3">Invited Email</th>
                        <th className="py-2 px-3">Role</th>
                        <th className="py-2 px-3">Invite Code</th>
                        <th className="py-2 px-3">Expires</th>
                        <th className="py-2 px-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-800/60 text-stone-300">
                      {adminInvites.filter(i => i.status === 'PENDING').map(inv => (
                        <tr key={inv.id}>
                          <td className="py-2.5 px-3 font-mono text-white">{inv.email}</td>
                          <td className="py-2.5 px-3">{inv.role}</td>
                          <td className="py-2.5 px-3 font-mono text-emerald-400 font-bold">{inv.token}</td>
                          <td className="py-2.5 px-3 text-stone-400 text-[11px]">{new Date(inv.expiresAt).toLocaleDateString()}</td>
                          <td className="py-2.5 px-3 text-right space-x-2">
                            <button
                              type="button"
                              onClick={() => copyToClipboard(inv.token, 'token')}
                              className="text-stone-300 hover:text-white underline text-[11px] cursor-pointer"
                            >
                              Copy Code
                            </button>
                            <button
                              type="button"
                              onClick={() => revokeInvite(inv.id)}
                              className="text-red-400 hover:text-red-300 underline text-[11px] cursor-pointer"
                            >
                              Revoke
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* LEAD DETAILS DRAWER / MODAL */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center animate-in fade-in duration-200">
          <div className="relative bg-[#11141A] border border-stone-750 rounded-lg max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6 text-stone-200">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-stone-800 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs uppercase font-mono tracking-widest text-emerald-400 font-bold">
                    INQUIRY FILE #{selectedLead.id.slice(-6)}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${getStatusBadge(selectedLead.status)}`}>
                    {selectedLead.status}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white">
                  {selectedLead.fullName}
                </h2>
                <div className="text-xs text-stone-400">
                  {selectedLead.organizationName} ({selectedLead.organizationType})
                </div>
              </div>

              <button
                onClick={() => setSelectedLead(null)}
                className="p-1.5 rounded bg-stone-900 text-stone-400 hover:text-white border border-stone-800 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Direct Contact Buttons */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <a
                href={`mailto:${selectedLead.email}?subject=Keystone%20Digital:%20Inquiry%20from%20${encodeURIComponent(selectedLead.organizationName)}`}
                className="bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 px-3 py-1.5 rounded flex items-center gap-1.5 font-semibold"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>Email Client</span>
              </a>
              <a
                href={`tel:${selectedLead.phone.replace(/\s+/g, '')}`}
                className="bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 px-3 py-1.5 rounded flex items-center gap-1.5 font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call Phone</span>
              </a>
              <a
                href={`https://wa.me/${selectedLead.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(selectedLead.fullName)},%20this%20is%20Keystone%20Digital%20following%20up%20on%20your%20project%20inquiry.`}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-700/80 px-3 py-1.5 rounded flex items-center gap-1.5 font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Message</span>
              </a>
            </div>

            {/* Structured Specifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-stone-900/60 p-4 rounded border border-stone-800 text-xs">
              <div>
                <span className="text-stone-400 uppercase text-[10px] block">Project Type</span>
                <span className="font-bold text-white mt-0.5 block">{selectedLead.projectType}</span>
              </div>
              <div>
                <span className="text-stone-400 uppercase text-[10px] block">Budget Range</span>
                <span className="font-bold text-emerald-400 mt-0.5 block font-mono">{selectedLead.budget}</span>
              </div>
              <div>
                <span className="text-stone-400 uppercase text-[10px] block">Launch Target</span>
                <span className="font-bold text-white mt-0.5 block">{selectedLead.preferredLaunchDate}</span>
              </div>
              <div>
                <span className="text-stone-400 uppercase text-[10px] block">Date Received</span>
                <span className="font-bold text-stone-300 mt-0.5 block">{new Date(selectedLead.createdAt).toLocaleDateString()}</span>
              </div>
            </div>

            {/* Current Website */}
            {selectedLead.currentWebsite && (
              <div className="text-xs bg-stone-900 p-3 rounded border border-stone-800 flex items-center justify-between">
                <span className="text-stone-400">Current Client Website:</span>
                <a
                  href={selectedLead.currentWebsite}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:underline flex items-center gap-1 font-mono"
                >
                  <span>{selectedLead.currentWebsite}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}

            {/* Project Description */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-stone-300 mb-1.5">
                Client Project Description & Brief
              </h4>
              <div className="p-4 bg-stone-950 rounded border border-stone-800/80 text-xs sm:text-sm text-stone-200 leading-relaxed whitespace-pre-wrap">
                {selectedLead.projectDescription}
              </div>
            </div>

            {/* Change Status Pipeline Control */}
            <div className="border-t border-stone-800 pt-4">
              <label className="block text-xs uppercase font-bold text-stone-400 mb-2">
                Move Pipeline Status:
              </label>
              <div className="flex flex-wrap gap-2 text-xs">
                {(['NEW', 'CONTACTED', 'CONSULTATION', 'PROPOSAL SENT', 'WON', 'LOST'] as LeadStatus[]).map(status => (
                  <button
                    key={status}
                    onClick={() => {
                      updateLeadStatus(selectedLead.id, status);
                      setSelectedLead({ ...selectedLead, status });
                    }}
                    className={`px-3 py-1.5 rounded font-bold uppercase tracking-wider text-[11px] transition-colors cursor-pointer border ${
                      selectedLead.status === status
                        ? 'bg-emerald-600 text-stone-950 border-emerald-400'
                        : 'bg-stone-900 text-stone-300 hover:bg-stone-850 border-stone-700'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Private Internal Notes */}
            <div className="border-t border-stone-800 pt-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs uppercase tracking-wider font-bold text-emerald-400 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" />
                  Private Internal Notes (Confidential to Admins)
                </h4>
              </div>

              <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
                {selectedLead.internalNotes.map((note, idx) => (
                  <div key={idx} className="p-2.5 bg-stone-900/90 rounded border border-stone-800 text-xs text-stone-300 font-mono">
                    {note}
                  </div>
                ))}
              </div>

              <div className="flex gap-2 pt-1">
                <input
                  type="text"
                  placeholder="Add an internal note or meeting summary..."
                  value={newNoteInput}
                  onChange={e => setNewNoteInput(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === 'Enter') {
                      addLeadNote(selectedLead.id, newNoteInput);
                      setSelectedLead({
                        ...selectedLead,
                        internalNotes: [...selectedLead.internalNotes, `[Just now] ${newNoteInput}`]
                      });
                      setNewNoteInput('');
                    }
                  }}
                  className="flex-1 bg-stone-900 border border-stone-700 rounded px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                />
                <button
                  type="button"
                  onClick={() => {
                    if (!newNoteInput.trim()) return;
                    addLeadNote(selectedLead.id, newNoteInput);
                    setSelectedLead({
                      ...selectedLead,
                      internalNotes: [...selectedLead.internalNotes, `[Just now] ${newNoteInput}`]
                    });
                    setNewNoteInput('');
                  }}
                  className="bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold px-4 py-2 rounded text-xs uppercase tracking-wider cursor-pointer"
                >
                  Save Note
                </button>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="border-t border-stone-800 pt-4 flex justify-between items-center text-xs">
              <button
                onClick={() => {
                  archiveLead(selectedLead.id);
                  setSelectedLead(null);
                }}
                className="text-stone-400 hover:text-white flex items-center gap-1"
              >
                <Archive className="w-3.5 h-3.5" />
                <span>{selectedLead.isArchived ? 'Unarchive Lead' : 'Archive Lead'}</span>
              </button>

              <button
                onClick={() => setSelectedLead(null)}
                className="bg-stone-800 hover:bg-stone-700 text-stone-200 px-4 py-2 rounded font-bold uppercase tracking-wider text-[11px]"
              >
                Close Drawer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
