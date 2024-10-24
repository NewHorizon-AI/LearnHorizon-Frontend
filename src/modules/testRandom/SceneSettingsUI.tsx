import React from 'react'
import useSceneSettings from './useSceneSettings'
import CameraSettings from './CameraSettings' // Nuevo subcomponente
// import GridSettings from './GridSettings' // Deberías crear más subcomponentes de manera similar
// import ModelSettings from './ModelSettings'
// import TransformationsSettings from './TransformationsSettings'

const SceneSettingsUI: React.FC = () => {
  const { sceneSettings, updateSettings } = useSceneSettings()

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Scene Settings</h1>

      <CameraSettings
        settings={sceneSettings.cameraSettings}
        onChange={(key, value) => {
          updateSettings('cameraSettings', key, value)
        }}
      />
      {/* <GridSettings
        settings={sceneSettings.gridSettings}
        onChange={(key, value) => {
          updateSettings('gridSettings', key, value)
        }}
      />
      <ModelSettings
        settings={sceneSettings.modelSettings}
        onChange={(key, value) => {
          updateSettings('modelSettings', key, value)
        }}
      />
      <TransformationsSettings
        settings={sceneSettings.transformationsSettings}
        onChange={(key, value) => {
          updateSettings('transformationsSettings', key, value)
        }}
      /> */}
    </div>
  )
}

export default SceneSettingsUI
