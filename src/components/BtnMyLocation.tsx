import { useContext } from "react"
import { MapContext, PlacesContext } from "../context"

export const BtnMyLocation = () => {
  const { map, isMapReady } = useContext(MapContext)
  const { userLocation } = useContext(PlacesContext)
  const onClick = () => {
    if (!isMapReady) throw new Error('Mapa no está listo')
    if (!userLocation) throw new Error('No hay ubicación del usuario')

    map?.flyTo({
      zoom: 14,
      center: userLocation,
    })
  }

  return (
    <button
      className="btn btn-primary"
      onClick={onClick}
      style={{
        position: 'fixed',
        right: '20px',
        top: '20px',
        zIndex: 100,
      }}
    >
      Mi Ubicación
    </button>
  )
}
