import { services } from "@/data/services";

export function Services() {
  return (
    <section className="w-full bg-[#121212] pt-6 pb-16 px-4 lg:pt-[70px] lg:pb-[70px] lg:px-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col justify-between lg:flex-row lg:items-start gap-12 lg:gap-0">
        
        {/* Left Side Header Text */}
        <div className="w-full max-w-[430px] h-[192px] flex flex-col gap-[24px] lg:sticky lg:top-32">
          <h2 className="text-[48px] sm:text-5xl lg:text-[56px] font-medium leading-[1.1]  tracking-[-5px] text-white">
            What I can do for you
          </h2>
          <p className="text-[16px] lg:text-[16px] leading-[28px] text-white/70 max-w-[380px]">
            As a product designer, I create experiences that are intuitive, engaging, and leave a lasting impression.
          </p>
        </div>

        {/* Right Side Vertical Stepper */}
        <div className="relative w-full lg:max-w-[619px] flex flex-col gap-10 lg:gap-12">
          
          {/* Dashed Connecting Line */}
          <div className="absolute left-[20px] top-[20px] bottom-[20px] w-0 border-r-2 border-dashed border-white/20" />

          {services.map((service, index) => (
            <div key={service.number || index} className="relative flex items-start gap-6 pl-[64px]">
              
              {/* White Numbered Circle */}
              <div className="absolute left-0 top-0 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white text-black font-bold text-base shadow-sm z-10">
                {service.number || index + 1}
              </div>

              {/* Step Content */}
              <div className="flex flex-col gap-3 pt-1">
                <h3 className="text-[24px] font-bold text-[#C1FA51]">
                  {service.title}
                </h3>

                {/* Sub-features List */}
                {Array.isArray(service.items) ? (
                  <ul className="flex flex-col gap-2 text-[16px] lg:text-base text-white/80">
                    {service.items.map((item: string, i: number) => (
                      <li key={i} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm lg:text-base text-white/80 leading-relaxed">
                    {service.items}
                  </p>
                )}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}