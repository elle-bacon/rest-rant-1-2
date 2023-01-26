const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
          </main>
        </Def>
    )
}

module.exports = new_form

router.get('/new', (req, res) => {
    res.render('places/new')
  })

  const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
            <form method="POST" action="/places">

            </form>
          </main>
        </Def>
    )
}

module.exports = new_form


<form method="POST" action="/places">
  <div>
    <label htmlFor="name">Place Name</label>
    <input id="name" name="name" />
  </div>
</form>

<form method="POST" action="/places">
  <div className="form-group">
    <label htmlFor="name">Place Name</label>
    <input className="form-control" id="name" name="name" required />
  </div>
  <div className="form-group">
    <label htmlFor="pic">Place Picture</label>
    <input className="form-control" id="pic" name="pic" />
  </div>
  <div className="form-group">
    <label htmlFor="city">City</label>
    <input className="form-control" id="city" name="city" />
  </div>
  <div className="form-group">
    <label htmlFor="state">State</label>
    <input className="form-control" id="state" name="state" />
  </div>
  <div className="form-group">
    <label htmlFor="cuisines">Cuisines</label>
    <input className="form-control" id="cuisines" name="cuisines" required />
  </div>
  <input className="btn btn-primary" type="submit" value="Add Place" />
</form>



