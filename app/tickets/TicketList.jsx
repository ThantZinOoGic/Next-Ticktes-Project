import Link from "next/link";
import { resolve } from "path";

async function getAPIData(url)
{
    let res = await fetch(url,{
        next : {
            revalidate : 0 //re fetch after tiime
        }
    });
    return res.json();
}

export default async function TicketList() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    const tickets = await getAPIData('https://next-tickets-api.vercel.app/tickets');
  return (
    <>
        {tickets.map(ticket => <Link key={ticket.id}  href={`tickets/${ticket.id}`}>
            <div className="card my-5">
                <h2>{ticket.title}</h2>
                <p>{ticket.body.slice(0, 200)} ...</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority}
                </div>
            </div>
        </Link>)}

        {tickets.length === 0 && (
            <p className="text-center">There is no open tickets. </p>
        )}
    </>
  )
}
