export const dynamicParams = false; // to error url handle
export async function generateStaticParams()
{
    const res = await fetch("https://next-tickets-api.vercel.app/tickets");

    const tickets = await res.json();
    return tickets.map(ticket => ({id : ticket.id}))
}

async function getAPIData(url)
{
    let res = await fetch(url,{
        next : {
            revalidate : 0 //re fetch after time
        }
    });
    return res.json();
}


export default async function Page({params}) {
    const id = params.id;
    const ticket = await getAPIData("https://next-tickets-api.vercel.app/tickets/"+id);
  return (
    <main>
        <nav>
            <h2>Ticket Details</h2>
        </nav>
        <div className="card">
            <h3>{ticket.title}</h3>
            <small>Created By {ticket.user_email}</small>
            <p>{ticket.body}</p>
            <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
            </div>
        </div>
    </main>
  )
}
