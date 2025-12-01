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
  { href: 'https://link.com', icon: 'fa-chart-line', label: 'sth' },
  { href: 'https://link.com', icon: 'fa-sth', label: 'sth' },
  { href: 'https://link.com', icon: 'fa-sth', label: 'sth' },
  { href: 'https://link.com', icon: 'fa-sth', label: 'sth' },
  { href: 'https://link.com', icon: 'fa-sth', label: 'sth' },
]

function App() {
  return (
    <>
      <header>
        <h1 className="logo">EMIS</h1>
        <p className="subtitle">Quick Access Portal</p>
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
