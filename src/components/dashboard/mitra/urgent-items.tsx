import { Edit2 } from 'lucide-react'

export function UrgentItems() {
  const items = [
    {
      id: 1,
      name: 'Artisan Sourdough',
      expiresIn: '45m',
      imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzVyoXnnub8iREvc5O507BCqCui3kk-uThCfO7KUsouEJgEOKghcD2bhFcDNH_iojyErqCFuhpKDDbCP_yQ7EPlA9Z0IvijRnS3-UtqYa6zgtR6uj_YQzvQw63VnV5_q-OD3eUYF4hIY2pr2qzBlCNgvjGD0DeFtrvPOTrO8UaQiintuulGQEpobdTiNOA8L2U_2IsJvbicG5O0Cj_nJ0QmCCVmdteA8A-uu58whM_i25T3GA1fAsz9UZJK7kpI9Kcx-6tEDILdDwj',
      alt: 'Artisan Sourdough'
    },
    {
      id: 2,
      name: 'Quinoa Salad Bowl',
      expiresIn: '1h 20m',
      imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhbsvg0N3NeBUQM6mkZy57iPvC2Umb-xNWxRSfAdd_fjTQSCcxOO-MilYXqytWnGTSMvA5liGcfxTCh1NFuxyL_yAQw2kPYdCiunUyRYA_5zgygl_QZJY2jPbq74WJO48RkrCHLLY7I9ixIljhQkAbFMg5SLPLZP5weCaiVFKw5Fpw-LZwJ-Zl5tGzE6M-ZUkB3mogOwEnQueVB7d0aupFvyhEpP2oJuM58QshVTQfMXxqcYO5tn4W4_nRL94lls3rQkSWQ_hzJHg2',
      alt: 'Quinoa Salad Bowl'
    },
    {
      id: 3,
      name: 'Organic Fruit Bag',
      expiresIn: '2h 05m',
      imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0FspFb5z54F_JG_9zJikMB-m2HnNURs67LDRkP8JGZud-yziuIwNb4EsHia6anY4QkrU3Sd899VuQZks_zAXBgQk2hS8Q_eArrGoPOi6JAXDzrFUbWIbHSz6mmPa0MhTBCcAm-9SIZzazlb-ty4O_W4WlI-oz2THIMRk0SBaFGmYMG9JAUFFtFptrPptWWQEHia_eAeBTpwWwJbEf2xg0iSt2QTlRRaowk4aYBD-lNZlZRKLZCIPf5e4q2I5cjgzVw2WaQOsivnH0',
      alt: 'Organic Fruit Bag'
    }
  ]

  return (
    <section className="bg-white p-6 rounded-xl shadow-level-1 h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-h3 text-2xl">Urgent Items</h3>
        <span className="text-caption text-error font-bold px-2 py-0.5 bg-error-container/20 rounded">
          Action Required
        </span>
      </div>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-surface-container-low transition-colors group">
            <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0">
              <img className="w-full h-full object-cover" alt={item.alt} src={item.imgSrc} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-label-md text-on-background truncate">{item.name}</p>
              <p className="text-caption text-secondary font-bold">Expires in {item.expiresIn}</p>
            </div>
            <button className="p-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              <Edit2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
      <button className="w-full mt-6 py-2 text-primary font-label-md hover:bg-primary/5 rounded-lg transition-all">
        View All Inventory
      </button>
    </section>
  )
}
