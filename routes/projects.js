const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

router.get('/:id', (req, res)=>{
    res.render('project', {
        title : projects[req.params.id].project_name,
        description : projects[req.params.id].description,
        technologies : projects[req.params.id].techonologies,
        live_demo: projects[req.params.id].live_link,
        github_repo: projects[req.params.id].github_link,
        project_img : projects[req.params.id].image_urls[1],
    });
});

module.exports = router;