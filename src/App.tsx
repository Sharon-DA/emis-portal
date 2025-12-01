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
  { href: 'https://emis.dhis2nigeria.org.ng/dhis', icon: 'fa-school', label: 'Annual School Census' },
  { href: 'https://registry.dhis2nigeria.org.ng/dhis', icon: 'fa-user-graduate', label: 'Student Registry' },
  { href: '', icon: 'fa-chalkboard-teacher', label: 'Teacher Registry' },
  { href: '', icon: 'fa-chart-pie', label: 'Analytics' },
  { href: '', icon: 'fa-book', label: 'Resources' },
]

function App() {
  return (
    <>
      <div className="green-bar"></div>
      
      <header>
        <p className="nigeria-text">Federal Republic of Nigeria</p>
        <img 
          src="/coat-of-arms.jpeg" 
          alt="Nigerian Coat of Arms" 
          className="coat-of-arms"
        />
        <h1 className="logo"><em>i</em>-EMIS</h1>
        <p className="subtitle">Integrated Education Management Information System</p>
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

      <footer>
        <div className="footer-content">
          © 2025 Federal Ministry of Education, Nigeria 
        </div>
      </footer>
    </>
  )
}

export default App
