import React from 'react'

interface MaterialSymbolProps {
  icon: string
}

const MaterialSymbol: React.FC<MaterialSymbolProps> = ({ icon }) => {
  return (
    <span className="material-symbols-outlined">
      {icon}
    </span>
  )
}

export default MaterialSymbol