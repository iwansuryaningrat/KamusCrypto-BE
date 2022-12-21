// Express REST server
import express from "express";
import cors from "cors";
import cookieSession from "cookie-session";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

// Load .env file
import "dotenv/config";
