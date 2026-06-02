import React from 'react';
import { 
  LayoutDashboard, Box, BarChart3, History, 
  Settings, LogOut, Plus, CheckCircle, Users
} from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function AppSidebar({ activeTab, setActiveTab }: AppSidebarProps) {
  const { setOpenMobile, isMobile } = useSidebar();

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <Sidebar className="border-r border-border bg-white mt-16 h-[calc(100vh-64px)] z-30 !border-t-0 hidden md:flex" collapsible="none">
      <SidebarHeader className="px-6 pt-6 pb-2">
        <p className="text-lg font-black text-primary">RescueEat Admin</p>
        <p className="text-xs text-muted-foreground">Food Waste Reduction Hub</p>
      </SidebarHeader>
      <SidebarContent className="px-4 mt-2">
        <SidebarMenu className="space-y-1">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
            { id: 'inventory', label: 'Inventory', icon: Box },
            { id: 'analytics', label: 'Analytics', icon: BarChart3 },
            { id: 'history', label: 'History', icon: History },
            { id: 'verification', label: 'Verification', icon: CheckCircle },
            { id: 'users', label: 'Users', icon: Users },
          ].map((item) => (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton 
                onClick={() => handleTabClick(item.id)}
                isActive={activeTab === item.id}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-6 h-auto rounded-lg transition-all duration-200 font-label-md",
                  activeTab === item.id 
                    ? "bg-emerald-50 text-primary font-bold hover:bg-emerald-50 hover:text-primary data-[active=true]:text-primary data-[active=true]:bg-emerald-50" 
                    : "text-muted-foreground hover:bg-zinc-50 hover:text-primary"
                )}
              >
                <item.icon className="w-5 h-5" /> 
                <span className="text-base">{item.label}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4 pb-8 space-y-1 mt-auto bg-white">
        <Button className="w-full bg-primary text-white flex items-center justify-center gap-2 py-6 rounded-lg font-bold shadow-md hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all">
          <Plus className="w-5 h-5" />
          Add New Listing
        </Button>
        <div className="pt-4 mt-4 border-t border-border">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-zinc-50 transition-all font-label-md">
            <Settings className="w-5 h-5" /> <span className="text-base">Settings</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-destructive hover:bg-destructive/10 transition-all font-label-md">
            <LogOut className="w-5 h-5" /> <span className="text-base">Logout</span>
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
