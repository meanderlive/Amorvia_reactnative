interface ModeInfo {
  id: string;
  name: string;
}

export const AppMode: Record<string, ModeInfo> = {
  Dating: {
    id: '659436bcacc570d6b14edf41',
    name: 'Dating'
  },
  Matrimony: {
    id: '65943637acc570d6b14edf38',
    name: 'Matrimony'
  }
} as const;
