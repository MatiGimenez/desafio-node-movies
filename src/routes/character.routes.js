const router = require("express").Router();
const {
  getCharacters,
  createCharacter,
  updateCharacter,
  deleteCharacter,
  getCharacterById,
  patchCharacter,
} = require("../resources/character.resource");

router.get("/", getCharacters);
router.get("/:id", getCharacterById);
router.post("/", createCharacter);
router.put("/:id", updateCharacter);
router.patch("/:id", patchCharacter);
router.delete("/:id", deleteCharacter);

module.exports = router;
