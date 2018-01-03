const logger = require('logger');


exports.up = function(knex, Promise) {
    logger.info(`Migration is about to start now`);
    const raw = `
---
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.5
-- Dumped by pg_dump version 9.6.3

-- Started on 2017-12-31 15:24:40 IST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 12655)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2593 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

--
-- TOC entry 191 (class 1259 OID 52268)
-- Name: integration_entities_id_seq; Type: SEQUENCE; Schema: public; Owner: inflowz_db_user
--

CREATE SEQUENCE integration_entities_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE integration_entities_id_seq OWNER TO inflowz_db_user;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 192 (class 1259 OID 52270)
-- Name: integration_entities; Type: TABLE; Schema: public; Owner: inflowz_db_user
--

CREATE TABLE integration_entities (
    id integer DEFAULT nextval('integration_entities_id_seq'::regclass) NOT NULL,
    external_api_name character varying NOT NULL,
    api_name character varying NOT NULL,
    label character varying(100) NOT NULL,
    org_id integer NOT NULL,
    integration_link_id integer NOT NULL,
    state smallint DEFAULT 0 NOT NULL,
    is_custom boolean DEFAULT false NOT NULL,
    last_sync_date timestamp without time zone,
    sync_options smallint DEFAULT 0 NOT NULL,
    history_fields character varying(500),
    last_objects_seed_date timestamp without time zone,
    last_history_seed_date timestamp without time zone,
    last_events_sync_date timestamp without time zone,
    display_field_name character varying(100),
    label_plural character varying(1000),
    is_system boolean,
    created_on timestamp without time zone DEFAULT now() NOT NULL,
    updated_on timestamp without time zone DEFAULT now() NOT NULL,
    created_by integer,
    updated_by integer
);


ALTER TABLE integration_entities OWNER TO inflowz_db_user;

--
-- TOC entry 193 (class 1259 OID 52282)
-- Name: integration_field_values_id_seq; Type: SEQUENCE; Schema: public; Owner: inflowz_db_user
--

CREATE SEQUENCE integration_field_values_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE integration_field_values_id_seq OWNER TO inflowz_db_user;

--
-- TOC entry 194 (class 1259 OID 52284)
-- Name: integration_field_values; Type: TABLE; Schema: public; Owner: inflowz_db_user
--

CREATE TABLE integration_field_values (
    id integer DEFAULT nextval('integration_field_values_id_seq'::regclass) NOT NULL,
    external_api_name character varying NOT NULL,
    api_name character varying NOT NULL,
    label character varying(500) NOT NULL,
    "order" integer DEFAULT 0 NOT NULL,
    org_id integer NOT NULL,
    field_api_name character varying NOT NULL,
    entity_api_name character varying NOT NULL,
    integration_link_id integer NOT NULL,
    state smallint NOT NULL,
    additional_info character varying(1000),
    created_on timestamp without time zone DEFAULT now() NOT NULL,
    updated_on timestamp without time zone DEFAULT now() NOT NULL,
    created_by integer,
    updated_by integer
);


ALTER TABLE integration_field_values OWNER TO inflowz_db_user;

--
-- TOC entry 195 (class 1259 OID 52294)
-- Name: integration_fields_id_seq; Type: SEQUENCE; Schema: public; Owner: inflowz_db_user
--

CREATE SEQUENCE integration_fields_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE integration_fields_id_seq OWNER TO inflowz_db_user;

--
-- TOC entry 196 (class 1259 OID 52296)
-- Name: integration_fields; Type: TABLE; Schema: public; Owner: inflowz_db_user
--

CREATE TABLE integration_fields (
    id integer DEFAULT nextval('integration_fields_id_seq'::regclass) NOT NULL,
    external_api_name character varying NOT NULL,
    api_name character varying NOT NULL,
    label character varying(100) NOT NULL,
    org_id integer NOT NULL,
    integration_link_id integer NOT NULL,
    entity_api_name character varying,
    state smallint DEFAULT 0 NOT NULL,
    created_on timestamp without time zone DEFAULT now() NOT NULL,
    updated_on timestamp without time zone DEFAULT now() NOT NULL,
    reference_to character varying(10000),
    data_type character varying(40) NOT NULL,
    is_custom boolean DEFAULT false NOT NULL,
    created_by integer,
    updated_by integer
);


ALTER TABLE integration_fields OWNER TO inflowz_db_user;

--
-- TOC entry 197 (class 1259 OID 52307)
-- Name: integration_link_id_seq; Type: SEQUENCE; Schema: public; Owner: inflowz_db_user
--

CREATE SEQUENCE integration_link_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE integration_link_id_seq OWNER TO inflowz_db_user;

--
-- TOC entry 198 (class 1259 OID 52309)
-- Name: integration_link; Type: TABLE; Schema: public; Owner: inflowz_db_user
--

CREATE TABLE integration_link (
    id integer DEFAULT nextval('integration_link_id_seq'::regclass) NOT NULL,
    org_id integer NOT NULL,
    type smallint NOT NULL,
    data text NOT NULL,
    created_on timestamp without time zone DEFAULT now() NOT NULL,
    updated_on timestamp without time zone DEFAULT now() NOT NULL,
    retry_count integer DEFAULT 0 NOT NULL,
    last_error character varying(200),
    state smallint DEFAULT 0,
    last_connection_date timestamp without time zone,
    last_metadata_sync_date timestamp without time zone,
    last_metadata_history_sync_date timestamp without time zone,
    created_by integer,
    updated_by integer
);


ALTER TABLE integration_link OWNER TO inflowz_db_user;


--
-- TOC entry 199 (class 1259 OID 52320)
-- Name: organizations; Type: TABLE; Schema: public; Owner: inflowz_db_user
--

CREATE TABLE organizations (
    id integer NOT NULL,
    name character varying(45) NOT NULL,
    created_on timestamp without time zone NOT NULL,
    updated_on timestamp without time zone DEFAULT now() NOT NULL,
    created_by integer,
    updated_by integer
);


ALTER TABLE organizations OWNER TO inflowz_db_user;

--
-- TOC entry 200 (class 1259 OID 52324)
-- Name: organizations_id_seq; Type: SEQUENCE; Schema: public; Owner: inflowz_db_user
--

CREATE SEQUENCE organizations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE organizations_id_seq OWNER TO inflowz_db_user;

--
-- TOC entry 2595 (class 0 OID 0)
-- Dependencies: 200
-- Name: organizations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: inflowz_db_user
--

ALTER SEQUENCE organizations_id_seq OWNED BY organizations.id;


--
-- TOC entry 201 (class 1259 OID 52326)
-- Name: process_mapping_rule_id_seq; Type: SEQUENCE; Schema: public; Owner: inflowz_db_user
--

CREATE SEQUENCE process_mapping_rule_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE process_mapping_rule_id_seq OWNER TO inflowz_db_user;

--
-- TOC entry 202 (class 1259 OID 52328)
-- Name: process_mapping_rules; Type: TABLE; Schema: public; Owner: inflowz_db_user
--

CREATE TABLE process_mapping_rules (
    id integer DEFAULT nextval('process_mapping_rule_id_seq'::regclass) NOT NULL,
    org_id integer NOT NULL,
    process_mapping_id integer NOT NULL,
    rule_type smallint NOT NULL,
    criteria character varying(5000) NOT NULL,
    criteria_outcome smallint NOT NULL,
    label character varying(100),
    limbo_hours integer,
    limbo_display_unit smallint,
    potential_lost_hours integer,
    potential_lost_display_unit smallint,
    state smallint DEFAULT 0 NOT NULL,
    rule_sub_type smallint,
    label_by smallint,
    created_on timestamp without time zone DEFAULT now() NOT NULL,
    updated_on timestamp without time zone DEFAULT now() NOT NULL,
    created_by integer,
    updated_by integer
);


ALTER TABLE process_mapping_rules OWNER TO inflowz_db_user;

--
-- TOC entry 203 (class 1259 OID 52338)
-- Name: process_mappings_id_seq; Type: SEQUENCE; Schema: public; Owner: inflowz_db_user
--

CREATE SEQUENCE process_mappings_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE process_mappings_id_seq OWNER TO inflowz_db_user;

--
-- TOC entry 204 (class 1259 OID 52340)
-- Name: process_mappings; Type: TABLE; Schema: public; Owner: inflowz_db_user
--

CREATE TABLE process_mappings (
    id integer DEFAULT nextval('process_mappings_id_seq'::regclass) NOT NULL,
    org_id integer NOT NULL,
    name character varying(100) NOT NULL,
    integration_link_id integer NOT NULL,
    entity_api_name character varying,
    progression_field_api_name character varying,
    limbo_hours integer,
    limbo_display_unit smallint,
    potential_lost_hours integer,
    potential_lost_display_unit smallint,
    state smallint DEFAULT 0 NOT NULL,
    lead_kpi_field_path character varying(256),
    desired_outcome_values character varying[],
    undesired_outcome_values character varying[],
    created_on timestamp without time zone DEFAULT now() NOT NULL,
    updated_on timestamp without time zone DEFAULT now() NOT NULL,
    created_by integer,
    updated_by integer
);


ALTER TABLE process_mappings OWNER TO inflowz_db_user;

--
-- TOC entry 188 (class 1259 OID 52262)
-- Name: segmentation_id_seq; Type: SEQUENCE; Schema: public; Owner: inflowz_db_user
--

CREATE SEQUENCE segmentation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE segmentation_id_seq OWNER TO inflowz_db_user;

--
-- TOC entry 205 (class 1259 OID 52350)
-- Name: segmentation; Type: TABLE; Schema: public; Owner: inflowz_db_user
--

CREATE TABLE segmentation (
    id integer DEFAULT nextval('segmentation_id_seq'::regclass) NOT NULL,
    integration_link_id integer NOT NULL,
    entity_api_name character varying NOT NULL,
    org_id integer NOT NULL,
    label character varying(100),
    criteria character varying(500) NOT NULL,
    options character varying(1000),
    defaults character varying(1000),
    created_on timestamp without time zone DEFAULT now() NOT NULL,
    updated_on timestamp without time zone DEFAULT now() NOT NULL,
    created_by integer,
    updated_by integer
);


ALTER TABLE segmentation OWNER TO inflowz_db_user;

--
-- TOC entry 190 (class 1259 OID 52266)
-- Name: segmentation_link_id_seq; Type: SEQUENCE; Schema: public; Owner: inflowz_db_user
--

CREATE SEQUENCE segmentation_link_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE segmentation_link_id_seq OWNER TO inflowz_db_user;

--
-- TOC entry 206 (class 1259 OID 52359)
-- Name: segmentation_link; Type: TABLE; Schema: public; Owner: inflowz_db_user
--

CREATE TABLE segmentation_link (
    id integer DEFAULT nextval('segmentation_link_id_seq'::regclass) NOT NULL,
    process_mapping_id integer NOT NULL,
    segmentation_id integer NOT NULL,
    org_id integer NOT NULL,
    label character varying(100),
    criteria character varying(500),
    main_segmentation_path character varying(500) NOT NULL,
    options character varying(1000),
    defaults character varying(1000),
    created_on timestamp without time zone DEFAULT now() NOT NULL,
    updated_on timestamp without time zone DEFAULT now() NOT NULL,
    created_by integer,
    updated_by integer
);


ALTER TABLE segmentation_link OWNER TO inflowz_db_user;

--
-- TOC entry 189 (class 1259 OID 52264)
-- Name: space_id_seq; Type: SEQUENCE; Schema: public; Owner: inflowz_db_user
--

CREATE SEQUENCE space_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE space_id_seq OWNER TO inflowz_db_user;

--
-- TOC entry 207 (class 1259 OID 52368)
-- Name: space; Type: TABLE; Schema: public; Owner: inflowz_db_user
--

CREATE TABLE space (
    id integer DEFAULT nextval('space_id_seq'::regclass) NOT NULL,
    segmentation_link_id integer NOT NULL,
    org_id integer NOT NULL,
    main_segmentation_value character varying,
    label character varying(100),
    criteria character varying(500),
    options character varying(1000),
    defaults character varying(1000),
    state smallint DEFAULT 0 NOT NULL,
    created_on timestamp without time zone DEFAULT now() NOT NULL,
    updated_on timestamp without time zone DEFAULT now() NOT NULL,
    created_by integer,
    updated_by integer
);


ALTER TABLE space OWNER TO inflowz_db_user;

--
-- TOC entry 208 (class 1259 OID 52378)
-- Name: user_org_link; Type: TABLE; Schema: public; Owner: inflowz_db_user
--

CREATE TABLE user_org_link (
    org_id integer NOT NULL,
    user_id integer NOT NULL,
    roles smallint,
    created_on timestamp without time zone DEFAULT now() NOT NULL,
    updated_on timestamp without time zone DEFAULT now() NOT NULL,
    created_by integer,
    updated_by integer
);


ALTER TABLE user_org_link OWNER TO inflowz_db_user;

--
-- TOC entry 209 (class 1259 OID 52383)
-- Name: users; Type: TABLE; Schema: public; Owner: inflowz_db_user
--

CREATE TABLE users (
    user_id integer NOT NULL,
    email character varying(150) NOT NULL,
    display_name character varying(50) NOT NULL,
    state smallint NOT NULL,
    password character varying(100) NOT NULL,
    salt character varying(50) NOT NULL,
    image_url character varying(250),
    last_login_date timestamp without time zone,
    login_count bigint NOT NULL,
    timezone_offset smallint,
    language smallint DEFAULT 1 NOT NULL,
    created_on timestamp without time zone DEFAULT now() NOT NULL,
    updated_on timestamp without time zone DEFAULT now() NOT NULL,
    created_by integer,
    updated_by integer
);


ALTER TABLE users OWNER TO inflowz_db_user;

--
-- TOC entry 210 (class 1259 OID 52392)
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: inflowz_db_user
--

CREATE SEQUENCE users_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_user_id_seq OWNER TO inflowz_db_user;

--
-- TOC entry 2596 (class 0 OID 0)
-- Dependencies: 210
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: inflowz_db_user
--

ALTER SEQUENCE users_user_id_seq OWNED BY users.user_id;


--
-- TOC entry 2373 (class 2604 OID 52394)
-- Name: organizations id; Type: DEFAULT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY organizations ALTER COLUMN id SET DEFAULT nextval('organizations_id_seq'::regclass);


--
-- TOC entry 2397 (class 2604 OID 52395)
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY users ALTER COLUMN user_id SET DEFAULT nextval('users_user_id_seq'::regclass);


--
-- TOC entry 2420 (class 2606 OID 52397)
-- Name: process_mapping_rules ProcessMappingRules_pkey; Type: CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY process_mapping_rules
    ADD CONSTRAINT "ProcessMappingRules_pkey" PRIMARY KEY (id);


--
-- TOC entry 2404 (class 2606 OID 52405)
-- Name: integration_entities integration_entities_pkey; Type: CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY integration_entities
    ADD CONSTRAINT integration_entities_pkey PRIMARY KEY (id);


--
-- TOC entry 2409 (class 2606 OID 52407)
-- Name: integration_field_values integration_field_values_pkey; Type: CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY integration_field_values
    ADD CONSTRAINT integration_field_values_pkey PRIMARY KEY (id);


--
-- TOC entry 2413 (class 2606 OID 52409)
-- Name: integration_fields integration_fields_pkey; Type: CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY integration_fields
    ADD CONSTRAINT integration_fields_pkey PRIMARY KEY (id);


--
-- TOC entry 2415 (class 2606 OID 52411)
-- Name: integration_link integration_link_pkey; Type: CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY integration_link
    ADD CONSTRAINT integration_link_pkey PRIMARY KEY (id);


--
-- TOC entry 2418 (class 2606 OID 52413)
-- Name: organizations organizations_pkey; Type: CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY organizations
    ADD CONSTRAINT organizations_pkey PRIMARY KEY (id);


--
-- TOC entry 2428 (class 2606 OID 52415)
-- Name: process_mappings process_mappings_pkey; Type: CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY process_mappings
    ADD CONSTRAINT process_mappings_pkey PRIMARY KEY (id);


--
-- TOC entry 2438 (class 2606 OID 52401)
-- Name: segmentation_link segmentation_link_pkey; Type: CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY segmentation_link
    ADD CONSTRAINT segmentation_link_pkey PRIMARY KEY (id);


--
-- TOC entry 2433 (class 2606 OID 52565)
-- Name: segmentation segmentation_pkey; Type: CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY segmentation
    ADD CONSTRAINT segmentation_pkey PRIMARY KEY (id);


--
-- TOC entry 2442 (class 2606 OID 52399)
-- Name: space space_pkey; Type: CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY space
    ADD CONSTRAINT space_pkey PRIMARY KEY (id);


--
-- TOC entry 2444 (class 2606 OID 52417)
-- Name: user_org_link user_org_link_pkey; Type: CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY user_org_link
    ADD CONSTRAINT user_org_link_pkey PRIMARY KEY (org_id, user_id);


--
-- TOC entry 2447 (class 2606 OID 52419)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- TOC entry 2445 (class 1259 OID 52420)
-- Name: EmailUniqueness; Type: INDEX; Schema: public; Owner: inflowz_db_user
--

CREATE UNIQUE INDEX "EmailUniqueness" ON users USING btree (email);


--
-- TOC entry 2416 (class 1259 OID 52421)
-- Name: OrganizationNameUniqueness; Type: INDEX; Schema: public; Owner: inflowz_db_user
--

CREATE UNIQUE INDEX "OrganizationNameUniqueness" ON organizations USING btree (name);


--
-- TOC entry 2400 (class 1259 OID 52422)
-- Name: apiNameUniqueness; Type: INDEX; Schema: public; Owner: inflowz_db_user
--

CREATE UNIQUE INDEX "apiNameUniqueness" ON integration_entities USING btree (api_name, integration_link_id);


--
-- TOC entry 2410 (class 1259 OID 52423)
-- Name: fieldApiNameUniqueness; Type: INDEX; Schema: public; Owner: inflowz_db_user
--

CREATE UNIQUE INDEX "fieldApiNameUniqueness" ON integration_fields USING btree (api_name, entity_api_name, integration_link_id);


--
-- TOC entry 2405 (class 1259 OID 52424)
-- Name: fieldValueApiNameUniqueness; Type: INDEX; Schema: public; Owner: inflowz_db_user
--

CREATE UNIQUE INDEX "fieldValueApiNameUniqueness" ON integration_field_values USING btree (api_name, label, field_api_name, entity_api_name, integration_link_id);


--
-- TOC entry 2411 (class 1259 OID 52433)
-- Name: fki_fki_integration_fields_entity_id; Type: INDEX; Schema: public; Owner: inflowz_db_user
--

CREATE INDEX fki_fki_integration_fields_entity_id ON integration_fields USING btree (entity_api_name, integration_link_id);


--
-- TOC entry 2406 (class 1259 OID 52434)
-- Name: fki_integration_field_values_field_api_name; Type: INDEX; Schema: public; Owner: inflowz_db_user
--

CREATE INDEX fki_integration_field_values_field_api_name ON integration_field_values USING btree (field_api_name, entity_api_name, integration_link_id);


--
-- TOC entry 2407 (class 1259 OID 52435)
-- Name: fki_integration_field_values_integration_id; Type: INDEX; Schema: public; Owner: inflowz_db_user
--

CREATE INDEX fki_integration_field_values_integration_id ON integration_field_values USING btree (integration_link_id);


--
-- TOC entry 2401 (class 1259 OID 52436)
-- Name: fki_integration_link; Type: INDEX; Schema: public; Owner: inflowz_db_user
--

CREATE INDEX fki_integration_link ON integration_entities USING btree (integration_link_id);


--
-- TOC entry 2402 (class 1259 OID 52437)
-- Name: fki_org_id; Type: INDEX; Schema: public; Owner: inflowz_db_user
--

CREATE INDEX fki_org_id ON integration_entities USING btree (org_id);


--
-- TOC entry 2423 (class 1259 OID 52438)
-- Name: fki_process_mapping_entity; Type: INDEX; Schema: public; Owner: inflowz_db_user
--

CREATE INDEX fki_process_mapping_entity ON process_mappings USING btree (entity_api_name, integration_link_id);


--
-- TOC entry 2421 (class 1259 OID 52439)
-- Name: fki_process_mapping_id_process_mappings_id_fkey; Type: INDEX; Schema: public; Owner: inflowz_db_user
--

CREATE INDEX fki_process_mapping_id_process_mappings_id_fkey ON process_mapping_rules USING btree (process_mapping_id);


--
-- TOC entry 2424 (class 1259 OID 52440)
-- Name: fki_process_mapping_progression_field; Type: INDEX; Schema: public; Owner: inflowz_db_user
--

CREATE INDEX fki_process_mapping_progression_field ON process_mappings USING btree (progression_field_api_name, entity_api_name, integration_link_id);


--
-- TOC entry 2422 (class 1259 OID 52441)
-- Name: fki_process_mapping_rule_id_org_id_fkey; Type: INDEX; Schema: public; Owner: inflowz_db_user
--

CREATE INDEX fki_process_mapping_rule_id_org_id_fkey ON process_mapping_rules USING btree (org_id);


--
-- TOC entry 2425 (class 1259 OID 52442)
-- Name: fki_process_mappings_integration_link; Type: INDEX; Schema: public; Owner: inflowz_db_user
--

CREATE INDEX fki_process_mappings_integration_link ON process_mappings USING btree (integration_link_id);


--
-- TOC entry 2426 (class 1259 OID 52443)
-- Name: fki_process_mappings_org_id; Type: INDEX; Schema: public; Owner: inflowz_db_user
--

CREATE INDEX fki_process_mappings_org_id ON process_mappings USING btree (org_id);


--
-- TOC entry 2429 (class 1259 OID 52427)
-- Name: fki_segmentation_entity; Type: INDEX; Schema: public; Owner: inflowz_db_user
--

CREATE INDEX fki_segmentation_entity ON segmentation USING btree (entity_api_name, integration_link_id);


--
-- TOC entry 2430 (class 1259 OID 52428)
-- Name: fki_segmentation_integration_link; Type: INDEX; Schema: public; Owner: inflowz_db_user
--

CREATE INDEX fki_segmentation_integration_link ON segmentation USING btree (integration_link_id);


--
-- TOC entry 2434 (class 1259 OID 52430)
-- Name: fki_segmentation_link_org_id; Type: INDEX; Schema: public; Owner: inflowz_db_user
--

CREATE INDEX fki_segmentation_link_org_id ON segmentation_link USING btree (org_id);


--
-- TOC entry 2435 (class 1259 OID 52431)
-- Name: fki_segmentation_link_process_mapping; Type: INDEX; Schema: public; Owner: inflowz_db_user
--

CREATE INDEX fki_segmentation_link_process_mapping ON segmentation_link USING btree (process_mapping_id);


--
-- TOC entry 2436 (class 1259 OID 52429)
-- Name: fki_segmentation_link_segmentation; Type: INDEX; Schema: public; Owner: inflowz_db_user
--

CREATE INDEX fki_segmentation_link_segmentation ON segmentation_link USING btree (segmentation_id);


--
-- TOC entry 2431 (class 1259 OID 52432)
-- Name: fki_segmentation_org_id; Type: INDEX; Schema: public; Owner: inflowz_db_user
--

CREATE INDEX fki_segmentation_org_id ON segmentation USING btree (org_id);


--
-- TOC entry 2439 (class 1259 OID 52426)
-- Name: fki_space_org_id; Type: INDEX; Schema: public; Owner: inflowz_db_user
--

CREATE INDEX fki_space_org_id ON space USING btree (org_id);


--
-- TOC entry 2440 (class 1259 OID 52425)
-- Name: fki_space_segmentation_link_id; Type: INDEX; Schema: public; Owner: inflowz_db_user
--

CREATE INDEX fki_space_segmentation_link_id ON space USING btree (segmentation_link_id);


--
-- TOC entry 2453 (class 2606 OID 52484)
-- Name: integration_fields fki_integration_fields_entity_api_name; Type: FK CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY integration_fields
    ADD CONSTRAINT fki_integration_fields_entity_api_name FOREIGN KEY (entity_api_name, integration_link_id) REFERENCES integration_entities(api_name, integration_link_id);


--
-- TOC entry 2448 (class 2606 OID 52489)
-- Name: integration_entities integration_entities_integration_link; Type: FK CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY integration_entities
    ADD CONSTRAINT integration_entities_integration_link FOREIGN KEY (integration_link_id) REFERENCES integration_link(id);


--
-- TOC entry 2449 (class 2606 OID 52494)
-- Name: integration_entities integration_entities_org_id; Type: FK CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY integration_entities
    ADD CONSTRAINT integration_entities_org_id FOREIGN KEY (org_id) REFERENCES organizations(id);


--
-- TOC entry 2450 (class 2606 OID 52499)
-- Name: integration_field_values integration_field_values_field_api_name; Type: FK CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY integration_field_values
    ADD CONSTRAINT integration_field_values_field_api_name FOREIGN KEY (field_api_name, entity_api_name, integration_link_id) REFERENCES integration_fields(api_name, entity_api_name, integration_link_id);


--
-- TOC entry 2451 (class 2606 OID 52504)
-- Name: integration_field_values integration_field_values_integration_id; Type: FK CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY integration_field_values
    ADD CONSTRAINT integration_field_values_integration_id FOREIGN KEY (integration_link_id) REFERENCES integration_link(id);


--
-- TOC entry 2452 (class 2606 OID 52509)
-- Name: integration_field_values integration_field_values_org_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY integration_field_values
    ADD CONSTRAINT integration_field_values_org_id_fkey FOREIGN KEY (org_id) REFERENCES organizations(id);


--
-- TOC entry 2454 (class 2606 OID 52514)
-- Name: integration_fields integration_fields_integration_id; Type: FK CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY integration_fields
    ADD CONSTRAINT integration_fields_integration_id FOREIGN KEY (integration_link_id) REFERENCES integration_link(id);


--
-- TOC entry 2455 (class 2606 OID 52519)
-- Name: integration_fields integration_fields_org_id; Type: FK CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY integration_fields
    ADD CONSTRAINT integration_fields_org_id FOREIGN KEY (org_id) REFERENCES organizations(id);


--
-- TOC entry 2458 (class 2606 OID 52524)
-- Name: process_mappings process_mapping_entity; Type: FK CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY process_mappings
    ADD CONSTRAINT process_mapping_entity FOREIGN KEY (entity_api_name, integration_link_id) REFERENCES integration_entities(api_name, integration_link_id);


--
-- TOC entry 2456 (class 2606 OID 52529)
-- Name: process_mapping_rules process_mapping_id_process_mappings_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY process_mapping_rules
    ADD CONSTRAINT process_mapping_id_process_mappings_id_fkey FOREIGN KEY (process_mapping_id) REFERENCES process_mappings(id);


--
-- TOC entry 2459 (class 2606 OID 52534)
-- Name: process_mappings process_mapping_progression_field; Type: FK CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY process_mappings
    ADD CONSTRAINT process_mapping_progression_field FOREIGN KEY (progression_field_api_name, entity_api_name, integration_link_id) REFERENCES integration_fields(api_name, entity_api_name, integration_link_id);


--
-- TOC entry 2457 (class 2606 OID 52539)
-- Name: process_mapping_rules process_mapping_rule_org_id_organizations_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY process_mapping_rules
    ADD CONSTRAINT process_mapping_rule_org_id_organizations_id_fkey FOREIGN KEY (org_id) REFERENCES organizations(id);


--
-- TOC entry 2460 (class 2606 OID 52544)
-- Name: process_mappings process_mappings_integration_link; Type: FK CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY process_mappings
    ADD CONSTRAINT process_mappings_integration_link FOREIGN KEY (integration_link_id) REFERENCES integration_link(id);


--
-- TOC entry 2461 (class 2606 OID 52549)
-- Name: process_mappings process_mappings_org_id; Type: FK CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY process_mappings
    ADD CONSTRAINT process_mappings_org_id FOREIGN KEY (org_id) REFERENCES organizations(id);


--
-- TOC entry 2462 (class 2606 OID 52454)
-- Name: segmentation segmentation_entity; Type: FK CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY segmentation
    ADD CONSTRAINT segmentation_entity FOREIGN KEY (entity_api_name, integration_link_id) REFERENCES integration_entities(api_name, integration_link_id);
--
-- TOC entry 2464 (class 2606 OID 52459)
-- Name: segmentation segmentation_integration_link; Type: FK CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY segmentation
    ADD CONSTRAINT segmentation_integration_link FOREIGN KEY (integration_link_id) REFERENCES integration_link(id);


--
-- TOC entry 2467 (class 2606 OID 52566)
-- Name: segmentation_link segmentation_link_segmentation_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY segmentation_link
    ADD CONSTRAINT segmentation_link_segmentation_id_fkey FOREIGN KEY (segmentation_id) REFERENCES segmentation(id);


--
-- TOC entry 2463 (class 2606 OID 52469)
-- Name: segmentation segmentation_org_id; Type: FK CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY segmentation
    ADD CONSTRAINT segmentation_org_id FOREIGN KEY (org_id) REFERENCES organizations(id);


--
-- TOC entry 2465 (class 2606 OID 52474)
-- Name: segmentation_link segmentation_org_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY segmentation_link
    ADD CONSTRAINT segmentation_org_id_fkey FOREIGN KEY (org_id) REFERENCES organizations(id);


--
-- TOC entry 2466 (class 2606 OID 52479)
-- Name: segmentation_link segmentation_process_mapping_fkey; Type: FK CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY segmentation_link
    ADD CONSTRAINT segmentation_process_mapping_fkey FOREIGN KEY (process_mapping_id) REFERENCES process_mappings(id);


--
-- TOC entry 2469 (class 2606 OID 52449)
-- Name: space space_org_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY space
    ADD CONSTRAINT space_org_id_fkey FOREIGN KEY (org_id) REFERENCES organizations(id);


--
-- TOC entry 2468 (class 2606 OID 52444)
-- Name: space space_segmentation_link_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: inflowz_db_user
--

ALTER TABLE ONLY space
    ADD CONSTRAINT space_segmentation_link_id_fkey FOREIGN KEY (segmentation_link_id) REFERENCES segmentation_link(id);


-- Completed on 2017-12-31 15:24:40 IST

--
-- PostgreSQL database dump complete
--


    `;
    logger.info(`Migration ended successfully`);
    return knex.schema.raw(raw);
};

exports.down = function(knex, Promise) {

};
