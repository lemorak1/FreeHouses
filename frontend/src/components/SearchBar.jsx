import './SearchBar.css'

function SearchBar({ value, onChange }) {
  return (
    <input
      className="search-bar"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Buscar..."
    />
  )
}

export default SearchBar
