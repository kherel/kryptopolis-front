export function getDisplayName(name, component){
  return (
    `name(${component.displayName ||
    component.name ||
    "Component"})`
  )
}

