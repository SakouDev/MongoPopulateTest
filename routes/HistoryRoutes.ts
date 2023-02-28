import { Router } from "express";
import HistoryController from "../controllers/HistoryController";

const router = Router();

/**
 * @swagger
 * tags:
 *      name: History
 *      description: Manage history
 */

/**
 * @openapi
 * /api/history:
 *   get:
 *      tags: [History]
 *      description: Welcome to swagger-jsdoc!
 *      responses:
 *        200:
 *          description: Returns a mysterious string.
 */
router.get('/', HistoryController.getHistory)
/**
  * @openapi
  * /api/history/{id}:
  *  get:
  *      tags: [History]
  *      description: Get an history by id
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: string
  *         default: 1
  *      responses:
  *        200:
  *          description: Returns a mysterious string.
  */
router.get('/:id', HistoryController.getHistoryById)
/**
  * @openapi
  * /api/history:
  *  post:
  *      tags: [History]
  *      description: Add an history
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: {"title": "OnePiece","type": "Manga","author": "Eichiro Oda","location": "Boulogne Sur mer","history" : [{ "emprunt": "2023-01-26T00:00:00.000Z", "rendu": "2023-01-27T00:00:00.000Z", "user": 1 },{ "emprunt": "2023-02-01T00:00:00.000Z", "rendu": null, "user": 2 }]}
  *      responses:
  *        200:
  *          description: Returns a mysterious string.
  */
router.post('/', HistoryController.addHistory)
/**
  * @openapi
  * /api/history/{id}:
  *  put:
  *      tags: [History]
  *      description: Update an history
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: string
  *         default: 1
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: {"title": "OnePiece","type": "Manga","author": "Eichiro Oda","location": "Boulogne Sur mer","history" : [{ "emprunt": "2023-01-26T00:00:00.000Z", "rendu": "2023-01-27T00:00:00.000Z", "user": 1 },{ "emprunt": "2023-02-01T00:00:00.000Z", "rendu": null, "user": 2 }]}
  *      responses:
  *        200:
  *          description: Returns a mysterious string.
  */
router.put('/:id', HistoryController.updateHistory)
/**
  * @openapi
  * /api/history/{id}:
  *  delete:
  *      tags: [History]
  *      description: Delete an history
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: string
  *      responses:
  *        200:
  *          description: Returns a mysterious string. 
  */
router.delete('/:id', HistoryController.deleteHistory)

export default router
