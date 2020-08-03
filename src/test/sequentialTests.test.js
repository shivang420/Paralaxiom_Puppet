const timeout = 10000000;

describe('Sequentially run Tests', () => {

   lineCheckPoint = require('./SerialTests/lineCheckPoint')
   lineCheckPoint

   lineWithDirectionCheckPoint = require('./SerialTests/lineWithDirectionCheckPoint')
   lineWithDirectionCheckPoint

   insideZonePolygonCheckPoint = require('./SerialTests/insideZonePolygonCheckPoint')
   insideZonePolygonCheckPoint

   insideZoneFullFrameCheckPoint = require('./SerialTests/insideZoneFullFrameCheckPoint')
   insideZoneFullFrameCheckPoint

   zoneExitCheckPoint = require('./SerialTests/zoneExitCheckPoint')
   zoneExitCheckPoint

   zoneEntryCheckPoint = require('./SerialTests/zoneEntryCheckPoint')
   zoneEntryCheckPoint

   anprZoneCheckPoint = require('./SerialTests/anprZoneCheckPoint')
   anprZoneCheckPoint

   stoppingInTheZoneCheckPoint = require('./SerialTests/stoppingInTheZoneCheckPoint')
   stoppingInTheZoneCheckPoint

   personNotFoundFullFrameCheckPoint = require('./SerialTests/personNotFoundFullFrameCheckPoint')
   personNotFoundFullFrameCheckPoint

   personNotFoundZoneCheckPoint = require('./SerialTests/personNotFoundZoneCheckPoint')
   personNotFoundZoneCheckPoint

   personCountInZoneCheckPoint = require('./SerialTests/personCountInZoneCheckPoint')
   personCountInZoneCheckPoint







   // deleteCheckPoint = require('./SerialTests/deleteCheckPoint')
   // deleteCheckPoint

   // trackObjectCheckPoint = require('./SerialTests/trackObjectCheckPoint')
   // trackObjectCheckPoint

  

}, timeout);