import Aircraft from "./aircraft"
import FleetManagement from "./fleetManagement"
import LineMaintenance from "./lineMaintenance"

export const tabHeaders = [
    'AIRFRAME MAINTENANCE AND OVERHAUL ',
    'LINE MAINTENANCE & AOG',
    'FLEET MANAGEMENT AND MAINTENANCE SUPPORT(CAMO)'
  ]
  export const tabBodies = [<Aircraft />, <LineMaintenance />, <FleetManagement />]