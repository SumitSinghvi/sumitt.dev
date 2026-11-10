import { Avatar, Badge, Phone, Roll, Row, Stage, States, Text, type Act } from '../../kit'
import './demos.css'

// No signal in the market: orders queue on the phone, then sync the moment it is back online.
type S = { online: boolean; sent: number }
const initial: S = { online: false, sent: 0 }
const ORDERS = [
  ['Demo Fabrics', 'Print 58" · 1,440m'],
  ['Example Textiles', 'Quality B · 960m'],
  ['Test Creation', 'Quality A · 1,920m'],
]

async function script(a: Act<S>) {
  await a.wait(1800)
  await a.set({ online: true })
  await a.wait(500)
  for (let i = 1; i <= 3; i++) {
    await a.set({ sent: i })
    await a.wait(450)
  }
  await a.wait(2600)
  await a.set({ online: false, sent: 0 })
  await a.wait(600)
}

export function OfflineSync() {
  return (
    <Stage<S> width={360} height={300} initial={initial} poster={{ online: true, sent: 3 }} script={script} fill className="dm dm-offline">
      {(s) => (
        <Phone width={300} frame="pro" className="dm-phone">
          <div className="dm-app">
            <div className="dm-app-top">
              <Text className="dm-app-title">Orders</Text>
              <States value={s.online ? 'on' : 'off'} states={{ off: <Badge tone="warning" dot>No signal</Badge>, on: <Badge tone="success" dot>Online</Badge> }} />
            </div>
            <Text className="dm-sub">
              <Roll>{s.sent === 3 ? 'All orders synced' : `${3 - s.sent} waiting to sync`}</Roll>
            </Text>
            <div className="dm-list">
              {ORDERS.map(([n, m], i) => (
                <Row key={n} lead={<Avatar name={n} size={32} />} title={<Text>{n}</Text>} subtitle={<Text>{m}</Text>}>
                  <States value={i < s.sent ? 'sent' : 'queued'} states={{ queued: <Badge tone="warning">Queued</Badge>, sent: <Badge tone="success">Synced</Badge> }} />
                </Row>
              ))}
            </div>
          </div>
        </Phone>
      )}
    </Stage>
  )
}
