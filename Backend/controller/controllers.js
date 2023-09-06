const Review = require('../model/reviews');


exports.postReviews = (req, res, next) => {
    const name = req.body.name;
    const pros = req.body.pros;
    const cons = req.body.cons;
    const rating = req.body.rating;

    return Review.create({
        name: name,
        pros: pros,
        cons: cons,
        rating: rating

    }).then(data => {
        console.log('Successfully added to the database from the page');
        return res.json(data);
    }).catch(err => console.log(err))
}
exports.getReviews = (req, res, next) => {
    Review.findAll()
        .then(Row => {
            res.json(Row);
        })
        .catch(err => console.log(err));
}

exports.FilterByCompanyName = async (req, res, next) => {
    const name = req.query.name;
    try {
        const results = await Review.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`, // Case-insensitive search
                },
            },
        });
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}





