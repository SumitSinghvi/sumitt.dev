import { Avatar, Badge, Bar, Button, Collapse, Icon, Notification, Phone, Row, Stage, States, Text, Window, WALLPAPER, type Act } from '../../kit'
import './orders.css'

// Hero for an offline-first order and challan app: a rep books an order on the
// phone with no signal, it syncs into the manager's dashboard as Pending, the
// manager approves it, and the challan goes out on WhatsApp.
// Real strings: the party, the quality and meters, the amount, the status,
// the notification. Everything else is filler.

type S = { away: boolean; synced: boolean; booked: boolean; row: boolean; approved: boolean; challan: boolean }

const initial: S = { away: false, synced: false, booked: false, row: false, approved: false, challan: false }
const POSTER: S = { away: false, synced: true, booked: true, row: true, approved: true, challan: true }
const REST = { wide: { x: 200, y: 310 }, compact: { x: 180, y: 380 } }

async function script(a: Act<S>) {
  await a.wait(900)
  await a.move('book')
  await a.wait(300)
  await a.click()
  await a.set({ booked: true })
  await a.wait(900)
  await a.set({ synced: true })
  await a.wait(500)
  await a.set({ away: true })
  await a.wait(500)
  await a.set({ row: true })
  await a.wait(1400)
  await a.move('approve')
  await a.wait(300)
  await a.click()
  await a.set({ approved: true })
  await a.wait(700)
  await a.set({ away: false })
  await a.wait(500)
  await a.set({ challan: true })
  await a.move('rest')
  await a.wait(2600)
  await a.set({ challan: false })
  await a.wait(500)
  await a.set({ row: false, booked: false, approved: false, synced: false })
  await a.wait(700)
}

export function OrdersDemo() {
  return (
    <Stage<S>
      width={720}
      height={340}
      compact={{ below: 600, width: 358, height: 340 }}
      initial={initial}
      poster={POSTER}
      script={script}
      cursor={{ at: REST, style: 'arrow' }}
      fill
      className="od"
    >
      {(s, _rect, layout) => (
        <>
          <Window url="orders" className="od-window">
            <div className="od-body">
              <div className="od-head">
                <Text className="od-title">Live orders</Text>
                <Bar w={64} h={24} r={6} tone={1} />
              </div>
              <Collapse open={s.row} reveal="drop">
                <Row
                  lead={<Avatar name="Demo Fabrics" size={32} />}
                  title={<Text>Demo Fabrics</Text>}
                  subtitle={<Text>Print 58" · 1,440m</Text>}
                  meta={<Text>₹2,39,040</Text>}
                  className="od-new"
                >
                  <span className="od-state" data-target="approve">
                    <States
                      value={s.approved ? 'done' : 'ask'}
                      states={{
                        ask: <Button size="small" variant="primary">Approve</Button>,
                        done: <Badge tone="success" dot>Confirmed</Badge>,
                      }}
                    />
                  </span>
                </Row>
              </Collapse>
              {[
                [72, 52, 'success'],
                [60, 44, 'accent'],
                [68, 50, 'success'],
              ].map(([n, m, tone], i) => (
                <Row key={i} lead={<Avatar plain size={32} />} title={<Bar w={n as number} tone={3} />} subtitle={<Bar w={m as number} h={5} tone={2} />} meta={<Bar w={44} tone={2} />}>
                  <Badge tone={tone as 'success'}>{tone === 'success' ? 'Dispatched' : 'Pending'}</Badge>
                </Row>
              ))}
            </div>
          </Window>

          <Phone width={layout === "compact" ? 280 : 270} frame="pro" className="od-phone" data-away={(layout === "compact" && s.away) || undefined}>
            <div className="od-app">
              <div className="od-app-top">
                <Text className="od-app-title">New order</Text>
                <States
                  value={s.synced ? 'on' : 'off'}
                  states={{
                    off: <Badge tone="warning" dot>Offline</Badge>,
                    on: <Badge tone="success" dot>Synced</Badge>,
                  }}
                />
              </div>
              <div className="od-field">
                <Text className="od-label">Party</Text>
                <Text className="od-value">Demo Fabrics</Text>
              </div>
              <div className="od-field">
                <Text className="od-label">Quality</Text>
                <Text className="od-value">Print 58" · 1,440m</Text>
              </div>
              <div className="od-field">
                <Text className="od-label">Amount</Text>
                <Text className="od-value">₹2,39,040</Text>
              </div>
              <Button size="large" variant="primary" className="od-book" data-target="book">
                <States
                  value={s.booked ? 'done' : 'go'}
                  states={{ go: <span>Book order</span>, done: <span>Order booked</span> }}
                />
              </Button>
            </div>
            {s.challan && (
              <Notification banner icon={<Icon name="check" filled size={20} />} title="Challan CH-1043 sent" body="Shared with Demo Fabrics on WhatsApp" />
            )}
          </Phone>
          <span data-target="rest" className="od-rest" style={{ left: REST[layout].x, top: REST[layout].y }} />
        </>
      )}
    </Stage>
  )
}
