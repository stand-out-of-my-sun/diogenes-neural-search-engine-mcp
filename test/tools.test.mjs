import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const manifestPath = path.resolve(__dirname, "../tools_manifest.json");
const tools = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const toolMap = new Map(tools.map(t => [t.name, t]));

test("Manifest Integrity: neural-search-engine declares exactly 12 tools", () => {
  assert.equal(tools.length, 12, "Tool count must match manifest");
});

test("Audit tool schema & hints: synthesize_neural_search", () => {
  const tool = toolMap.get("synthesize_neural_search");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: compile_research_dossier", () => {
  const tool = toolMap.get("compile_research_dossier");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: expand_search_queries", () => {
  const tool = toolMap.get("expand_search_queries");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: filter_domain_intelligence", () => {
  const tool = toolMap.get("filter_domain_intelligence");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: analyze_news_recency", () => {
  const tool = toolMap.get("analyze_news_recency");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: verify_factual_claims", () => {
  const tool = toolMap.get("verify_factual_claims");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: extract_scholarly_citations", () => {
  const tool = toolMap.get("extract_scholarly_citations");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: cluster_topic_subgraphs", () => {
  const tool = toolMap.get("cluster_topic_subgraphs");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: analyze_media_sentiment", () => {
  const tool = toolMap.get("analyze_media_sentiment");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: rank_expert_sources", () => {
  const tool = toolMap.get("rank_expert_sources");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: summarize_temporal_timeline", () => {
  const tool = toolMap.get("summarize_temporal_timeline");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: compile_competitive_landscape", () => {
  const tool = toolMap.get("compile_competitive_landscape");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

