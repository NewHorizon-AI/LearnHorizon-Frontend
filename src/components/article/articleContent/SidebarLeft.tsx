import React from 'react'

export default function SidebarLeft(): React.JSX.Element {
  return (
    <aside className="w-1/6 bg-gray-200 p-6 my-8 overflow-y-auto">
      <h2 className="text-md font-semibold mb-4">Random List</h2>
      <ul className="space-y-2 text-sm">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>
        <li>Item 7</li>
        <li>Item 8</li>
        {/* Add more items as needed */}
      </ul>
    </aside>
  )
}
