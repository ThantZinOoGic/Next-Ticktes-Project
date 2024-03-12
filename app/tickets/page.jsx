import React, { Suspense } from 'react'
import TicketList from './TicketList';
import Loading from './loading'

export default function Ticket() {
  return (
    <main>
      <nav>
        <h2>Tickets</h2>
        <p><small>Currentyl Open Tickets</small></p>
      </nav>
      <Suspense fallback={<Loading/>}>
        <TicketList/>
      </Suspense>
    </main>
  )
}
