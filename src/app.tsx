import React from 'react'
import '@/utils/polyfills'
import Layout from '@/components/Layout'

import './app.less'

const App: React.FC = ({ children }) => <Layout>{children}</Layout>

export default App
