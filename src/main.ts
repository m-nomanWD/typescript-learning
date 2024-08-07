import './style.css'

import './01tutorial.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1 class="read-the-docs">
      Learning TS
    </h1>
      <a href="/task">Tasks Application <span>></span></a>
  </div>
`
