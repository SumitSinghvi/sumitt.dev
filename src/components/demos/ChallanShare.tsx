import { Button, Icon, Stage, States, Text, type Act } from '../../kit'
import './demos.css'

// A clean challan, shared with the party in one tap.
type S = { shared: boolean }
const LINES = [
  ['Print 58" (Top)', '1,440m', '₹1,19,520'],
  ['Print 58" (Bottom)', '1,440m', '₹1,19,520'],
]
const REST = { x: 300, y: 250 }

async function script(a: Act<S>) {
  await a.wait(1800)
  await a.move('share')
  await a.wait(300)
  await a.click()
  await a.set({ shared: true })
  await a.move('rest')
  await a.wait(2800)
  await a.set({ shared: false })
  await a.wait(600)
}

export function ChallanShare() {
  return (
    <Stage<S> width={360} height={300} initial={{ shared: false }} poster={{ shared: true }} script={script} cursor={{ at: REST, style: 'arrow' }} fill className="dm dm-challan">
      {(s) => (
        <>
          <div className="dm-paper">
            <div className="dm-paper-head">
              <Text className="dm-paper-title">Delivery challan</Text>
              <Text className="dm-paper-no">CH-1043</Text>
            </div>
            <Text className="dm-paper-party">Demo Fabrics, Surat</Text>
            <div className="dm-lines">
              {LINES.map(([q, m, a]) => (
                <div key={q} className="dm-line">
                  <Text>{q}</Text>
                  <Text className="dm-dim">{m}</Text>
                  <Text className="dm-amt">{a}</Text>
                </div>
              ))}
              <div className="dm-line dm-total">
                <Text>Total</Text>
                <span />
                <Text className="dm-amt">₹2,39,040</Text>
              </div>
            <Button variant="primary" className="dm-share" data-target="share">
              <States
                value={s.shared ? 'done' : 'go'}
                states={{
                  go: <span className="dm-btn-in"><Icon name="send" size={14} />Share on WhatsApp</span>,
                  done: <span className="dm-btn-in"><Icon name="check" size={14} />Shared</span>,
                }}
              />
            </Button>
            </div>
          </div>
          <span data-target="rest" className="dm-rest" style={{ left: REST.x, top: REST.y }} />
        </>
      )}
    </Stage>
  )
}
