'use client'

import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import store, { useSelector } from '@/features/store'

export default function RootTemplate({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>{children}

      </DndProvider>
    </Provider>
  );
}