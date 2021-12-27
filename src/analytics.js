import  * as $ from 'jquery'

function createAnalytics () {
    let counter = 0
    let destroyed = false
    const listenter = () => counter++
    $(document).on('click', listenter)
    return {
        destroy() {
            $(document).off('click',listenter)
            destroyed = true
        },
        getClicks () {
            if (destroyed) {
                return `Analytics is destroyed tottal clicks = ${counter} `
            }
            return counter
        }
    }
}

window.analytics = createAnalytics()