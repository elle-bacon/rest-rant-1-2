const db = require('../models')

async function seed() {

    let place = await db.Place.findOne({ name: 'H-Thai-ML' })

    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })

    place.comments.push(comment.id)


    comment = await db.Comment.create({
        author: 'Joe Shine',
        rant: false,
        stars: 4.0,
        content: 'It was good overall, but not great'
    })


    place.comments.push(comment.id)


    comment = await db.Comment.create({
        author: 'Mean Mike',
        rant: true,
        stars: 1.0,
        content: 'Never again, never...'
    })
    place.comments.push(comment.id)

    await place.save()
    
    process.exit()
}

seed()

