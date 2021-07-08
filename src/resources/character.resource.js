const { RequiredFieldError } = require("../errors");
const Character = require("../models/Character");
const Validator = require("../utils/Validator");

async function getCharacters(_, res) {
  const characters = await Character.find({});

  if (!characters.length) {
    return res.status(204).send();
  }
  return res.status(200).json(characters);
}

async function getCharacterById(req, res) {
  const { id } = req.params;

  const character = await Character.findById(id);

  if (!character) return res.status(404).end();

  return res.status(200).json(character);
}

async function createCharacter(req, res) {
  try {
    Validator(req.body, [
      "image",
      "name",
      "age",
      "weight",
      "story",
      "appearances",
    ]);
    const { image, name, age, weight, story, appearances } = req.body;

    const created = await Character.create({
      image,
      name,
      age,
      weight,
      story,
      appearances,
    });

    return res.status(201).json(created);
  } catch (err) {
    if (err instanceof RequiredFieldError) {
      return res.status(err.code).send({ message: err.message });
    }
    return res.status(500).send({
      message: "Something wrong happen while trying to create character",
    });
  }
}

async function updateCharacter(req, res) {
  try {
    Validator(req.body, [
      "image",
      "name",
      "age",
      "weight",
      "story",
      "appearances",
    ]);

    const { image, name, age, weight, story, appearances } = req.body;
    const { id } = req.params;
    const updated = await Character.updateOne(
      { _id: id },
      {
        image,
        name,
        age,
        weight,
        story,
        appearances,
      }
    );
    if (updated.n > 0) return res.status(200).end();
    return res.status(302).end();
  } catch (err) {
    if (err instanceof RequiredFieldError) {
      return res.status(err.code).send({ message: err.message });
    }
    return res.status(500).send({
      message: "Something wrong happen while trying to update character",
    });
  }
}

async function patchCharacter(req, res) {
  const { image, name, age, weight, story, appearances } = req.body;
  const { id } = req.params;

  const character = await Character.findById(id);
  const updatedCharacter = {
    image: image ? image : character.image,
    name: name ? name : character.name,
    age: age ? age : character.age,
    weight: weight ? weight : character.weight,
    story: story ? story : character.story,
    appearances: appearances ? appearances : character.appearances,
  };

  const { n } = await Character.updateOne({ _id: id }, updatedCharacter);
  if (n > 0) return res.status(200).end();
  return res.status(302).end();
}

async function deleteCharacter(req, res) {
  try {
    const { id } = req.params;
    const deleted = await Character.deleteOne({ _id: id });
    if (deleted.ok) return res.status(200).end();
    return res.status(302).end();
  } catch (err) {
    return res
      .status(500)
      .send({ message: "An error ocurred trying to delete Character." });
  }
}

module.exports = {
  getCharacters,
  createCharacter,
  updateCharacter,
  deleteCharacter,
  getCharacterById,
  patchCharacter,
};
