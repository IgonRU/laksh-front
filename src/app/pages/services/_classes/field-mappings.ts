/**
 * Константы маппингов полей для различных источников данных
 */

// Маппинги для API v1
export const API_V1_FIELD_MAPPINGS = {
    // ServiceGroup маппинги
    'service_title': 'title',
    'service_description': 'description',
    'service_image': 'image',
    'steps': 'services',
    
    // Service маппинги
    'step_title': 'title',
    'step_description': 'description',
    'step_image': 'image'
};

// Маппинги для API v2
export const API_V2_FIELD_MAPPINGS = {
    // ServiceGroup маппинги
    'name': 'title',
    'desc': 'description',
    'img': 'image',
    'service_steps': 'services'
};

// Маппинги для API v2 (Service)
export const API_V2_STEP_FIELD_MAPPINGS = {
    'name': 'title',
    'desc': 'description',
    'img': 'image'
};

// Маппинги для внешнего API
export const EXTERNAL_API_FIELD_MAPPINGS = {
    // ServiceGroup маппинги
    'serviceName': 'title',
    'serviceDescription': 'description',
    'serviceImage': 'image',
    'serviceSteps': 'services',
    
    // Service маппинги
    'stepName': 'title',
    'stepDescription': 'description',
    'stepImage': 'image'
};

// Маппинги по умолчанию (без изменений)
export const DEFAULT_FIELD_MAPPINGS = {};
