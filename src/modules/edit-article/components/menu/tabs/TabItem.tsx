import React from 'react'

interface TabItemProps {
  tab: string
  isActive: boolean
  onClick: () => void
}

const TabItem: React.FC<TabItemProps> = ({ tab, isActive, onClick }) => {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      className={`px-4 py-1 rounded-md transition-colors duration-300 ${
        isActive ? 'bg-white ' : 'bg-gray-100 hover:bg-gray-200 '
      }`}
      onClick={onClick}
    >
      {tab}
    </button>
  )
}

export default TabItem
