import { Avatar, Badge, Roll, Row, Stage, States, Text, Window, type Act } from '../../kit'
import './demos.css'

// Know where your team is: reps on today's beat, one books an order.
type S = { booked: boolean }
const REPS = [
  ['Ramesh', 'Millennium Market', 3],
  ['Imran', 'RKTM Market', 5],
  ['Kiran', 'Regent Market', 2],
] as const

async function script(a: Act<S>) {
  await a.wait(2200)
  await a.set({ booked: true })
  await a.wait(3200)
  await a.set({ booked: false })
  await a.wait(800)
}

export function TeamBeat() {
  return (
    <Stage<S> width={360} height={300} initial={{ booked: false }} poster={{ booked: true }} script={script} fill className="dm dm-team">
      {(s) => (
        <Window url="team" className="dm-win">
          <div className="dm-win-body">
            <Text className="dm-app-title">Today's beat</Text>
            {REPS.map(([n, place, c], i) => (
              <Row key={n} lead={<Avatar name={n} size={32} />} title={<Text>{n}</Text>} subtitle={<Text>{place}</Text>}>
                <span className="dm-rep-meta">
                  <States
                    value={i === 0 && s.booked ? 'order' : 'live'}
                    states={{ live: <Badge tone="success" dot>Live</Badge>, order: <Badge tone="accent" dot>Order booked</Badge> }}
                  />
                  <Text className="dm-dim"><Roll>{`${c + (i === 0 && s.booked ? 1 : 0)} orders`}</Roll></Text>
                </span>
              </Row>
            ))}
          </div>
        </Window>
      )}
    </Stage>
  )
}
