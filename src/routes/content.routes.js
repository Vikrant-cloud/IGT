import express from 'express';
import { verifyUser } from '../middlewares/verifyUser.js';
import upload from '../utils/upload.js';
import { contentList, createContent, contentUpdate, deleteContent, homeContentList } from '../controller/content.controller.js';

const router = express.Router();

router.post('/create-content', verifyUser, upload.single('media'), createContent);
router.put('/:id', verifyUser, upload.single('media'), contentUpdate);
router.delete('/:id', verifyUser, deleteContent);
router.get('/', verifyUser, contentList);
router.get('/home-content', verifyUser, homeContentList);

export default router;
