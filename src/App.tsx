import './App.css'

interface ModuleCardProps {
  title: string
  subtitle: string
  icon: string
  href: string
}

const ModuleCard = ({ title, subtitle, icon, href }: ModuleCardProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="module-card">
      <div className="module-icon">{icon}</div>
      <h3 className="module-title">{title}</h3>
      <p className="module-subtitle">{subtitle}</p>
    </a>
  )
}

const modules = [
  {
    title: 'ASC',
    subtitle: 'Annual School Census',
    icon: '📊✓',
    href: 'https://emis.dhis2nigeria.org.ng'
  },
  {
    title: 'Learner Registry',
    subtitle: 'Manage Student Records',
    icon: '🎓',
    href: 'https://registry.dhis2nigeria.org.ng/dhis'
  },
  {
    title: 'Knowledgebase',
    subtitle: 'Access Educational Resources',
    icon: '📚',
    href: ''
  },
  {
    title: 'Safe Schools Tool',
    subtitle: 'Security Status of Schools',
    icon: '🛡',
    href: 'https://emis.dhis2nigeria.org.ng'
  },
]

function App() {
  return (
    <div className="app-container">
      <div className="background-overlay"></div>
      
      <header className="header">
        <img
          src="/top.png"
          alt="Nigerian Coat of Arms"
          className="coat-of-arms"
        />
        <h1 className="main-title">Education Data Platform</h1>
        <p className="main-subtitle">Enhancing Education for a Brighter Future</p>
      </header>

      <div className="modules-grid">
        {modules.map((module, index) => (
          <ModuleCard
            key={index}
            title={module.title}
            subtitle={module.subtitle}
            icon={module.icon}
            href={module.href}
          />
        ))}
      </div>
    </div>
  )
}

export default App
