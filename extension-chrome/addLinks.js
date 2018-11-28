const baseEl = document.getElementsByClassName('commit-ref base-ref')[0]
const baseElRepo = baseEl.children[0]
const baseElBranch = baseEl.children[1]
baseElRepo.innerHTML = `<a href="https://github.com/${baseElRepo.innerHTML}">${
	baseElRepo.innerHTML
}</a>`
const baseLink = `https://github.com/${baseEl.title.replace(/:/, '/tree/')}`
baseElBranch.innerHTML = `<a href="${baseLink}">${baseElBranch.innerHTML}</a>`

const headEl = document.getElementsByClassName('commit-ref head-ref')[0]
const headElRepo = headEl.children[0]
const headElBranch = headEl.children[1]
headElRepo.innerHTML = `<a href="https://github.com/${headElRepo.innerHTML}">${
	headElRepo.innerHTML
}</a>`
const headLink = `https://github.com/${headEl.title.replace(/:/, '/tree/')}`
headElBranch.innerHTML = `<a href="${headLink}">${headElBranch.innerHTML}</a>`
