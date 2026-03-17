interface TeamMember {
  name: string
  role: string
  initials: string
  color: string
}

const team: TeamMember[] = [
  { name: 'Prince Samuel A. ODEBODE', role: 'CEO / Founder', initials: 'PS', color: 'from-primary-600 to-primary-800' },
  { name: 'Olumuyiwa O. ODEBODE', role: 'Director, SmartPay Finance & Holdings', initials: 'OO', color: 'from-primary-700 to-primary-900' },
  { name: 'Esther B. ODEBODE', role: 'Director, SmartPay Finance & Holdings', initials: 'EO', color: 'from-blue-600 to-primary-800' },
  { name: 'Olufemi E. KILANKO', role: 'Director, SmartPay MFB', initials: 'OK', color: 'from-primary-500 to-primary-700' },
  { name: 'Temitope R. OJEWUMI', role: 'Director, SmartPay MFB', initials: 'TO', color: 'from-primary-600 to-blue-900' },
]

export default function Team(): JSX.Element {
  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">Leadership</span>
          <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-dark-900 leading-tight">Meet the Team</h2>
          <p className="text-dark-500 mt-4 max-w-xl mx-auto">Experienced leaders driving SmartPay Finance & Holdings Limited's mission to transform financial inclusion in Nigeria.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {team.map((member) => (
            <div key={member.name} className="group bg-white rounded-3xl p-7 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-56 text-center">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto mb-5 shadow-lg`}>
                <span className="text-white font-display font-bold text-lg">{member.initials}</span>
              </div>
              <h3 className="font-display font-bold text-dark-900 text-sm leading-snug mb-1">{member.name}</h3>
              <p className="text-primary-600 text-xs font-semibold">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
