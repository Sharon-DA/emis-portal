import './App.css'

interface IconCardProps {
  href: string
  icon: string
  label: string
}

const IconCard = ({ href, icon, label }: IconCardProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="icon-card">
      <div className="icon-wrapper">
        <i className={`fas ${icon}`}></i>
      </div>
      <span className="icon-label">{label}</span>
    </a>
  )
}

const icons = [
  { href: 'https://emis.dhis2nigeria.org.ng/dhis', icon: 'fa-school', label: 'ASC' },
  { href: 'https://emis.dhis2nigeria.org.ng/dhis', icon: 'fa-user-graduate', label: 'Student Registry' },
  { href: '', icon: 'fa-chalkboard-teacher', label: 'Teachers' },
  { href: '', icon: 'fa-chart-bar', label: 'Reports' },
  { href: '', icon: 'fa-cogs', label: 'Settings' },
]

function App() {
  return (
    <>
      <header>
        <h1 className="logo">EMIS</h1>
        <p className="subtitle">Education Management Information System</p>
      </header>

      <div className="icons-container">
        {icons.map((item, index) => (
          <IconCard
            key={index}
            href={item.href}
            icon={item.icon}
            label={item.label}
          />
        ))}
      </div>

      <footer>© 2025 EMIS Quick Access Portal</footer>
    </>
  )
}

export default App
