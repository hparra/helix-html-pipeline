/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

// NOTE: this file is autogenerated via 'npm run docs:types' in helix-admin-support

export interface ProjectConfig {
  /**
   * Name of the project used by the slack bot when reporting.
   */
  name?: string;
  /**
   * Name of the project used by the sidekick.
   */
  project?: string;
  /**
   * Timezone to be used by the slack bot when reporting times.
   */
  timezone?: string;
  /**
   * Production host use by the slack bot to display project information.
   */
  host?: string;
  /**
   * configuration blueprint repository in the owner/repo format.
   */
  blueprint?: string;
  /**
   * the slack teamId/channelID(s) where the slack bot is used.
   */
  slack?: string | string[];
  cdn?: ProjectCDNConfig;
  access?: SiteAccessConfig;
  admin?: AdminConfig;
}
/**
 * The CDN config
 */
export interface ProjectCDNConfig {
  prod: FastlyConfig | AkamaiConfig | CloudflareConfig | ManagedConfig;
  live?: {
    /**
     * Sidekick config to override the default preview host. it supports parameters $owner and $repo
     */
    host: string;
  };
  preview?: {
    /**
     * Sidekick config to override the default live host. it supports parameters $owner and $repo
     */
    host: string;
  };
}
/**
 * Production CDN configuration for Fastly
 */
export interface FastlyConfig {
  type: 'fastly';
  /**
   * production host
   */
  host: string;
  /**
   * Route or routes on the CDN that are rendered with Franklin
   */
  route: string | string[];
  /**
   * The Fastly Service ID
   */
  serviceId: string;
  /**
   * A Fastly token for purging
   */
  authToken: string;
}
export interface AkamaiConfig {
  type: 'akamai';
  /**
   * production host
   */
  host: string;
  /**
   * Route or routes on the CDN that are rendered with Franklin
   */
  route: string | string[];
  endpoint: string;
  clientSecret: string;
  clientToken: string;
  accessToken: string;
}
export interface CloudflareConfig {
  type: 'cloudflare';
  /**
   * production host
   */
  host: string;
  /**
   * Route or routes on the CDN that are rendered with Franklin
   */
  route: string | string[];
  origin: string;
  plan: string;
  zoneId: string;
  apiToken: string;
}
export interface ManagedConfig {
  type: 'managed';
  /**
   * production host
   */
  host: string;
  /**
   * Route or routes on the CDN that are rendered with Franklin
   */
  route: string | string[];
}
export interface SiteAccessConfig {
  /**
   * The email glob of the users that are allowed.
   */
  allow: string | string[];
  /**
   * the id of the API key(s). this is used to validate the API KEYS and allows to invalidate them.
   */
  apiKeyId?: string | string[];
  require?: {
    /**
     * The list of owner/repo pointers to projects that are allowed to use this content.
     */
    repository: string | string[];
  };
}
export interface AdminConfig {
  role?: Role;
  /**
   * the id of the API key(s). this is used to validate the API KEYS and allows to invalidate them.
   */
  apiKeyId?: string | string[];
}
export interface Role {
  /**
   * The email glob of the users with author role.
   */
  author?: string | string[];
  /**
   * The email glob of the users with publish role.
   */
  publish?: string | string[];
}
