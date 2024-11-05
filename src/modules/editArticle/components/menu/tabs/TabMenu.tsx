import React, { useRef, useEffect } from 'react'
import TabItem from './TabItem'

interface TabMenuProps {
  tabs: string[]
  className?: string
  activeTab: string
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

const TabMenu: React.FC<TabMenuProps> = (props) => {
  const { tabs, activeTab, setActiveTab, className } = props

  const tabMenuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const tabMenu = tabMenuRef.current

    if (tabMenu != null) {
      const handleWheelScroll = (event: WheelEvent): void => {
        if (event.deltaY !== 0) {
          event.preventDefault()
          tabMenu.scrollBy({
            left: event.deltaY, // Moverse horizontalmente con la rueda del mouse
            behavior: 'auto' // Desplazamiento suave
          })
        }
      }

      tabMenu.addEventListener('wheel', handleWheelScroll)

      // Cleanup: remove event listener on unmount
      return () => {
        tabMenu.removeEventListener('wheel', handleWheelScroll)
      }
    }
  }, [])

  return (
    <nav
      role="tablist"
      aria-orientation="horizontal"
      ref={tabMenuRef}
      className={`flex space-x-2 rounded-md w-full overflow-x-auto scrollbar-hide  ${className}`}
    >
      {tabs.map((tab) => (
        <TabItem
          key={tab}
          tab={tab}
          isActive={activeTab === tab}
          onClick={() => {
            setActiveTab(tab)
          }}
        />
      ))}
    </nav>
  )
}

export default TabMenu
