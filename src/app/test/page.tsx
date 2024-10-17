'use client'

/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react'

// Importar las interfaces
import {
  type ISceneSettings,
  type ICameraSettings,
  type IGridSettings,
  type IModelSettings,
  type ITransformationsSettings,
  type IVector3
} from '@/interfaces/scene-settings/scene-settings.interface'

const initialVector3: IVector3 = { x: 0, y: 0, z: 0 }
const initialCameraSettings: ICameraSettings = {
  _id: '1',
  fov: 60,
  near: 0.5,
  far: 500,
  position: initialVector3,
  lookAt: initialVector3,
  rotation: initialVector3,
  cameraType: 'perspective',
  __v: 0
}

const initialGridSettings: IGridSettings = {
  _id: '1',
  backgroundColor: '#ffffff',
  size: 20,
  divisions: 15,
  activarEjes: 'XY',
  gridVisible: true,
  gridOpacity: 1,
  __v: 0
}

const initialModelSettings: IModelSettings = {
  _id: '1',
  visible: true,
  __v: 0
}

const initialTransformationsSettings: ITransformationsSettings = {
  _id: '1',
  scale: [1, 1, 1],
  rotation: [0, 0, 0],
  position: [0, 0, 0],
  __v: 0
}

const SceneSettingsUI: React.FC = () => {
  const [sceneSettings, setSceneSettings] = useState<ISceneSettings>({
    _id: '1',
    cameraSettings: initialCameraSettings,
    gridSettings: initialGridSettings,
    modelSettings: initialModelSettings,
    transformationsSettings: initialTransformationsSettings,
    __v: 0
  })

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    key: string,
    section: keyof ISceneSettings
  ) => {
    const value = event.target.value
    setSceneSettings((prevSettings) => ({
      ...prevSettings,
      [section]: {
        ...(typeof prevSettings[section] === 'object'
          ? prevSettings[section]
          : {}),
        [key]: value
      }
    }))
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Scene Settings</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Camera Settings</h2>
        <div className="flex gap-4">
          <div>
            <label>FOV:</label>
            <input
              type="number"
              value={sceneSettings.cameraSettings.fov}
              onChange={(e) => {
                handleInputChange(e, 'fov', 'cameraSettings')
              }}
              className="input input-bordered"
            />
          </div>
          <div>
            <label>Near:</label>
            <input
              type="number"
              value={sceneSettings.cameraSettings.near}
              onChange={(e) => {
                handleInputChange(e, 'near', 'cameraSettings')
              }}
              className="input input-bordered"
            />
          </div>
          <div>
            <label>Far:</label>
            <input
              type="number"
              value={sceneSettings.cameraSettings.far}
              onChange={(e) => {
                handleInputChange(e, 'far', 'cameraSettings')
              }}
              className="input input-bordered"
            />
          </div>
        </div>

        {/* Position */}
        <div className="flex gap-4">
          <div>
            <label>Position X:</label>
            <input
              type="number"
              value={sceneSettings.cameraSettings.position.x}
              onChange={(e) =>
                handleInputChange(e, 'position', 'cameraSettings')
              }
              className="input input-bordered"
            />
          </div>
          <div>
            <label>Position Y:</label>
            <input
              type="number"
              value={sceneSettings.cameraSettings.position.y}
              onChange={(e) =>
                handleInputChange(e, 'position', 'cameraSettings')
              }
              className="input input-bordered"
            />
          </div>
          <div>
            <label>Position Z:</label>
            <input
              type="number"
              value={sceneSettings.cameraSettings.position.z}
              onChange={(e) =>
                handleInputChange(e, 'position', 'cameraSettings')
              }
              className="input input-bordered"
            />
          </div>
        </div>

        {/* LookAt */}
        <div className="flex gap-4">
          <div>
            <label>LookAt X:</label>
            <input
              type="number"
              value={sceneSettings.cameraSettings.lookAt.x}
              onChange={(e) => handleInputChange(e, 'lookAt', 'cameraSettings')}
              className="input input-bordered"
            />
          </div>
          <div>
            <label>LookAt Y:</label>
            <input
              type="number"
              value={sceneSettings.cameraSettings.lookAt.y}
              onChange={(e) => handleInputChange(e, 'lookAt', 'cameraSettings')}
              className="input input-bordered"
            />
          </div>
          <div>
            <label>LookAt Z:</label>
            <input
              type="number"
              value={sceneSettings.cameraSettings.lookAt.z}
              onChange={(e) => handleInputChange(e, 'lookAt', 'cameraSettings')}
              className="input input-bordered"
            />
          </div>
        </div>

        {/* Rotation */}
        <div className="flex gap-4">
          <div>
            <label>Rotation X:</label>
            <input
              type="number"
              value={sceneSettings.cameraSettings.rotation.x}
              onChange={(e) =>
                handleInputChange(e, 'rotation', 'cameraSettings')
              }
              className="input input-bordered"
            />
          </div>
          <div>
            <label>Rotation Y:</label>
            <input
              type="number"
              value={sceneSettings.cameraSettings.rotation.y}
              onChange={(e) =>
                handleInputChange(e, 'rotation', 'cameraSettings')
              }
              className="input input-bordered"
            />
          </div>
          <div>
            <label>Rotation Z:</label>
            <input
              type="number"
              value={sceneSettings.cameraSettings.rotation.z}
              onChange={(e) =>
                handleInputChange(e, 'rotation', 'cameraSettings')
              }
              className="input input-bordered"
            />
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Grid Settings</h2>
        <div className="flex gap-4">
          <div>
            <label>Background Color:</label>
            <input
              type="color"
              value={sceneSettings.gridSettings.backgroundColor}
              onChange={(e) => {
                handleInputChange(e, 'backgroundColor', 'gridSettings')
              }}
              className="input input-bordered"
            />
          </div>
          <div>
            <label>Size:</label>
            <input
              type="number"
              value={sceneSettings.gridSettings.size}
              onChange={(e) => {
                handleInputChange(e, 'size', 'gridSettings')
              }}
              className="input input-bordered"
            />
          </div>
          <div>
            <label>Divisions:</label>
            <input
              type="number"
              value={sceneSettings.gridSettings.divisions}
              onChange={(e) => {
                handleInputChange(e, 'divisions', 'gridSettings')
              }}
              className="input input-bordered"
            />
          </div>
        </div>

        {/* Ejes */}
        <div className="flex gap-4">
          <div>
            <label>Activar Ejes:</label>
            <select
              value={sceneSettings.gridSettings.activarEjes}
              onChange={(e) => {
                handleInputChange(e, 'activarEjes', 'gridSettings')
              }}
              className="select select-bordered"
            >
              <option value="XY">XY</option>
              <option value="XZ">XZ</option>
              <option value="YZ">YZ</option>
              <option value="XYZ">XYZ</option>
            </select>
          </div>
        </div>

        <div>
          <label>Grid Visible:</label>
          <input
            type="checkbox"
            checked={sceneSettings.gridSettings.gridVisible}
            onChange={(e) => {
              setSceneSettings((prevSettings) => ({
                ...prevSettings,
                gridSettings: {
                  ...prevSettings.gridSettings,
                  gridVisible: e.target.checked
                }
              }))
            }}
            className="checkbox checkbox-primary"
          />
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Model Settings</h2>
        <div>
          <label>Visible:</label>
          <input
            type="checkbox"
            checked={sceneSettings.modelSettings.visible}
            onChange={(e) => {
              setSceneSettings((prevSettings) => ({
                ...prevSettings,
                modelSettings: {
                  ...prevSettings.modelSettings,
                  visible: e.target.checked
                }
              }))
            }}
            className="checkbox checkbox-primary"
          />
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Transformations Settings</h2>
        <div>
          <label>Scale:</label>
          <input
            type="text"
            value={sceneSettings.transformationsSettings.scale.join(', ')}
            onChange={(e) => {
              setSceneSettings((prevSettings) => ({
                ...prevSettings,
                transformationsSettings: {
                  ...prevSettings.transformationsSettings,
                  scale: e.target.value.split(',').map(Number)
                }
              }))
            }}
            className="input input-bordered"
          />
        </div>
        <div>
          <label>Rotation:</label>
          <input
            type="text"
            value={sceneSettings.transformationsSettings.rotation.join(', ')}
            onChange={(e) => {
              setSceneSettings((prevSettings) => ({
                ...prevSettings,
                transformationsSettings: {
                  ...prevSettings.transformationsSettings,
                  rotation: e.target.value.split(',').map(Number)
                }
              }))
            }}
            className="input input-bordered"
          />
        </div>
        <div>
          <label>Position:</label>
          <input
            type="text"
            value={sceneSettings.transformationsSettings.position.join(', ')}
            onChange={(e) => {
              setSceneSettings((prevSettings) => ({
                ...prevSettings,
                transformationsSettings: {
                  ...prevSettings.transformationsSettings,
                  position: e.target.value.split(',').map(Number)
                }
              }))
            }}
            className="input input-bordered"
          />
        </div>
      </section>
    </div>
  )
}

export default SceneSettingsUI
