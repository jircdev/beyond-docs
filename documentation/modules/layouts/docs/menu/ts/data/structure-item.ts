export const structureItems = data => data.map(([id, label, children = undefined]) => ({id, label, children}));

