import { Camera, Save } from 'lucide-react'
import { motion } from 'motion/react'
import { fadeUp } from '@/lib/motion'
import { useState } from 'react'

export function SettingsForm() {
  const [activeTab, setActiveTab] = useState('profile')
  const tabs = ['Profile', 'Notifications', 'Security']

  return (
    <motion.div variants={fadeUp} className="bg-surface-container-lowest rounded-2xl shadow-[0px_4px_20px_rgba(29,53,87,0.05)] overflow-hidden border border-zinc-100">
      <div className="flex border-b border-zinc-100 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`px-8 py-4 font-label-md text-sm font-semibold whitespace-nowrap transition-colors ${
              activeTab === tab.toLowerCase() 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-zinc-500 hover:text-zinc-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-8">
        {activeTab === 'profile' && (
          <form className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary-fixed">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkzM1QkQvKj-3ngJ0-HJ9st8x8VSYf170m2z3qFrfwHGLrl80E1rcf7OsjKgHxuYdOFzeqqKcl4cB_hIgWNP95bYgeVfDNkqVXDWWxbJatqeEXUzB3fRlWZSXS8LaCKAHECS6KWv3eyRvbMDXZXm3phMLPVTjGMF-cajIc84gNtMY66dMQ-nalGzC4uzwWRjBPRJozt4SRxOl94j9zdC0j22SHd3enCwSdHqfGr0N024g9Dr_0ulML5Ja22egpesKcfQ8O3TSviiX6" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <button type="button" className="absolute bottom-0 right-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center border-2 border-white shadow-sm hover:scale-105 active:scale-95 transition-transform">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              <div>
                <h3 className="font-bold text-lg text-on-surface">Profile Picture</h3>
                <p className="text-sm text-zinc-500">JPG, GIF or PNG. Max size of 800K</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-sm font-semibold text-on-surface">First Name</label>
                <input 
                  type="text" 
                  className="w-full rounded-lg border-zinc-200 bg-white p-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all" 
                  defaultValue="Alex" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-sm font-semibold text-on-surface">Last Name</label>
                <input 
                  type="text" 
                  className="w-full rounded-lg border-zinc-200 bg-white p-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all" 
                  defaultValue="Rivers" 
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-label-md text-sm font-semibold text-on-surface">Email Address</label>
                <input 
                  type="email" 
                  className="w-full rounded-lg border-zinc-200 bg-zinc-50 p-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all" 
                  defaultValue="alex.rivers@example.com" 
                  disabled
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-label-md text-sm font-semibold text-on-surface">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full rounded-lg border-zinc-200 bg-white p-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all" 
                  defaultValue="+1 (555) 123-4567" 
                />
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-100 flex justify-end gap-4">
              <button 
                type="button" 
                className="px-6 py-2 font-semibold text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="flex items-center gap-2 px-6 py-2 font-semibold text-sm text-white bg-primary rounded-lg shadow-md hover:bg-emerald-800 active:scale-95 transition-all"
              >
                <Save className="w-4 h-4" /> Save Changes
              </button>
            </div>
          </form>
        )}

        {activeTab === 'notifications' && (
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-on-surface">Email Notifications</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="font-semibold text-sm text-on-surface">Order Updates</p>
                  <p className="text-xs text-zinc-500">Get notified when your rescue order status changes.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="font-semibold text-sm text-on-surface">New Rescues Near Me</p>
                  <p className="text-xs text-zinc-500">Weekly digest of new food rescue opportunities.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="font-semibold text-sm text-on-surface">Impact Reports</p>
                  <p className="text-xs text-zinc-500">Monthly summary of your carbon offset and savings.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
            
            <div className="pt-6 border-t border-zinc-100 flex justify-end">
              <button className="flex items-center gap-2 px-6 py-2 font-semibold text-sm text-white bg-primary rounded-lg shadow-md hover:bg-emerald-800 active:scale-95 transition-all">
                Update Preferences
              </button>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-on-surface">Change Password</h3>
            
            <form className="space-y-4 max-w-md">
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-sm font-semibold text-on-surface">Current Password</label>
                <input 
                  type="password" 
                  className="w-full rounded-lg border-zinc-200 bg-white p-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-sm font-semibold text-on-surface">New Password</label>
                <input 
                  type="password" 
                  className="w-full rounded-lg border-zinc-200 bg-white p-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-sm font-semibold text-on-surface">Confirm New Password</label>
                <input 
                  type="password" 
                  className="w-full rounded-lg border-zinc-200 bg-white p-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all" 
                />
              </div>
              
              <div className="pt-4 flex justify-start">
                <button type="submit" className="flex items-center gap-2 px-6 py-2 font-semibold text-sm text-white bg-primary rounded-lg shadow-md hover:bg-emerald-800 active:scale-95 transition-all">
                  Update Password
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </motion.div>
  )
}
