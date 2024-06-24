var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Satelit_1 = new ol.layer.Tile({
            'title': 'Satelit',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Tapak_Kawasan_Prioritas_2 = new ol.format.GeoJSON();
var features_Tapak_Kawasan_Prioritas_2 = format_Tapak_Kawasan_Prioritas_2.readFeatures(json_Tapak_Kawasan_Prioritas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tapak_Kawasan_Prioritas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tapak_Kawasan_Prioritas_2.addFeatures(features_Tapak_Kawasan_Prioritas_2);
var lyr_Tapak_Kawasan_Prioritas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tapak_Kawasan_Prioritas_2, 
                style: style_Tapak_Kawasan_Prioritas_2,
                popuplayertitle: "Tapak_Kawasan_Prioritas",
                interactive: true,
    title: 'Tapak_Kawasan_Prioritas<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_0.png" /> Area Flying Fox<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_1.png" /> Area Memancing<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_2.png" /> Area Outbond<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_3.png" /> Bangunan Penunjang<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_4.png" /> Gedung Outdoor<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_5.png" /> Gedung Pengelola<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_6.png" /> Gedung Service<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_7.png" /> Gudang Peralatan<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_8.png" /> Hutan<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_9.png" /> Jalan Hijau<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_10.png" /> Jalan Paving Block<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_11.png" /> Kebun Kopi<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_12.png" /> Kebun Teh<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_13.png" /> Kolam<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_14.png" /> Lapangan Camping Ground<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_15.png" /> Musholla<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_16.png" /> Parkir Pengelola<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_17.png" /> Parkir Pengunjung<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_18.png" /> Pertokoan UMKM<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_19.png" /> Pos Jaga<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_20.png" /> Pos Kesehatan<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_21.png" /> Pos Tracking<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_22.png" /> Ruang Ibadah<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_23.png" /> Ruang Informasi<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_24.png" /> Ruang Penyewaan Tenda<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_25.png" /> Ruang Staff<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_26.png" /> Sawah<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_27.png" /> Skywalk<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_28.png" /> Taman Bunga<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_29.png" /> Tempat Wudhu<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_30.png" /> Toilet<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_31.png" /> Toilet Pria<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_32.png" /> Toilet Wanita<br />\
    <img src="styles/legend/Tapak_Kawasan_Prioritas_2_33.png" /> Toko Oleh-oleh<br />'
        });
var format_Tapak_Pusat_Desa_3 = new ol.format.GeoJSON();
var features_Tapak_Pusat_Desa_3 = format_Tapak_Pusat_Desa_3.readFeatures(json_Tapak_Pusat_Desa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tapak_Pusat_Desa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tapak_Pusat_Desa_3.addFeatures(features_Tapak_Pusat_Desa_3);
var lyr_Tapak_Pusat_Desa_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tapak_Pusat_Desa_3, 
                style: style_Tapak_Pusat_Desa_3,
                popuplayertitle: "Tapak_Pusat_Desa",
                interactive: true,
    title: 'Tapak_Pusat_Desa<br />\
    <img src="styles/legend/Tapak_Pusat_Desa_3_0.png" /> Aula Desa<br />\
    <img src="styles/legend/Tapak_Pusat_Desa_3_1.png" /> Gedung Serbaguna<br />\
    <img src="styles/legend/Tapak_Pusat_Desa_3_2.png" /> Gudang<br />\
    <img src="styles/legend/Tapak_Pusat_Desa_3_3.png" /> Jogging Track<br />\
    <img src="styles/legend/Tapak_Pusat_Desa_3_4.png" /> Kantor Desa Jayamekar<br />\
    <img src="styles/legend/Tapak_Pusat_Desa_3_5.png" /> Lapang Serbaguna<br />\
    <img src="styles/legend/Tapak_Pusat_Desa_3_6.png" /> Masjid Jami An-Nur<br />\
    <img src="styles/legend/Tapak_Pusat_Desa_3_7.png" /> Musholla<br />\
    <img src="styles/legend/Tapak_Pusat_Desa_3_8.png" /> Permukiman<br />\
    <img src="styles/legend/Tapak_Pusat_Desa_3_9.png" /> Pos Keamanan<br />\
    <img src="styles/legend/Tapak_Pusat_Desa_3_10.png" /> Poskesdes<br />\
    <img src="styles/legend/Tapak_Pusat_Desa_3_11.png" /> Ruang Parkir<br />\
    <img src="styles/legend/Tapak_Pusat_Desa_3_12.png" /> Ruang Terbuka Hijau<br />\
    <img src="styles/legend/Tapak_Pusat_Desa_3_13.png" /> SD Negeri Cidomas<br />\
    <img src="styles/legend/Tapak_Pusat_Desa_3_14.png" /> Taman Desa<br />\
    <img src="styles/legend/Tapak_Pusat_Desa_3_15.png" /> Toliet<br />\
    <img src="styles/legend/Tapak_Pusat_Desa_3_16.png" /> Tribun<br />'
        });
var format_RencanaPolaRuang_4 = new ol.format.GeoJSON();
var features_RencanaPolaRuang_4 = format_RencanaPolaRuang_4.readFeatures(json_RencanaPolaRuang_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RencanaPolaRuang_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RencanaPolaRuang_4.addFeatures(features_RencanaPolaRuang_4);
var lyr_RencanaPolaRuang_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RencanaPolaRuang_4, 
                style: style_RencanaPolaRuang_4,
                popuplayertitle: "Rencana Pola Ruang",
                interactive: true,
    title: 'Rencana Pola Ruang<br />\
    <img src="styles/legend/RencanaPolaRuang_4_0.png" /> Hutan Produksi Terbatas<br />\
    <img src="styles/legend/RencanaPolaRuang_4_1.png" /> Imbuhan Air Tanah<br />\
    <img src="styles/legend/RencanaPolaRuang_4_2.png" /> Kawasan Peruntukan Industri<br />\
    <img src="styles/legend/RencanaPolaRuang_4_3.png" /> Keunikan Proses Geologi<br />\
    <img src="styles/legend/RencanaPolaRuang_4_4.png" /> Pemakaman<br />\
    <img src="styles/legend/RencanaPolaRuang_4_5.png" /> Pengelolaan Persampahan<br />\
    <img src="styles/legend/RencanaPolaRuang_4_6.png" /> Perdagangan dan Jasa Skala SWP<br />\
    <img src="styles/legend/RencanaPolaRuang_4_7.png" /> Pariwisata<br />\
    <img src="styles/legend/RencanaPolaRuang_4_8.png" /> Perlindungan Setempat<br />\
    <img src="styles/legend/RencanaPolaRuang_4_9.png" /> Perumahan Kepadatan Rendah<br />\
    <img src="styles/legend/RencanaPolaRuang_4_10.png" /> Perumahan Kepadatan Sangat Rendah<br />\
    <img src="styles/legend/RencanaPolaRuang_4_11.png" /> Perumahan Kepadatan Sedang<br />\
    <img src="styles/legend/RencanaPolaRuang_4_12.png" /> SPU Skala Kelurahan<br />\
    <img src="styles/legend/RencanaPolaRuang_4_13.png" /> Taman Buru<br />\
    <img src="styles/legend/RencanaPolaRuang_4_14.png" /> Tanaman Pangan<br />\
    <img src="styles/legend/RencanaPolaRuang_4_15.png" /> Transportasi<br />'
        });
var format_Rencana_Tempat_Pengelolaan_Sampah_Reuse_Reduce_Recycle_TPS3R_5 = new ol.format.GeoJSON();
var features_Rencana_Tempat_Pengelolaan_Sampah_Reuse_Reduce_Recycle_TPS3R_5 = format_Rencana_Tempat_Pengelolaan_Sampah_Reuse_Reduce_Recycle_TPS3R_5.readFeatures(json_Rencana_Tempat_Pengelolaan_Sampah_Reuse_Reduce_Recycle_TPS3R_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rencana_Tempat_Pengelolaan_Sampah_Reuse_Reduce_Recycle_TPS3R_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rencana_Tempat_Pengelolaan_Sampah_Reuse_Reduce_Recycle_TPS3R_5.addFeatures(features_Rencana_Tempat_Pengelolaan_Sampah_Reuse_Reduce_Recycle_TPS3R_5);
var lyr_Rencana_Tempat_Pengelolaan_Sampah_Reuse_Reduce_Recycle_TPS3R_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rencana_Tempat_Pengelolaan_Sampah_Reuse_Reduce_Recycle_TPS3R_5, 
                style: style_Rencana_Tempat_Pengelolaan_Sampah_Reuse_Reduce_Recycle_TPS3R_5,
                popuplayertitle: "Rencana_Tempat_Pengelolaan_Sampah_Reuse,_Reduce,_Recycle_(TPS3R)",
                interactive: true,
                title: '<img src="styles/legend/Rencana_Tempat_Pengelolaan_Sampah_Reuse_Reduce_Recycle_TPS3R_5.png" /> Rencana_Tempat_Pengelolaan_Sampah_Reuse,_Reduce,_Recycle_(TPS3R)'
            });
var format_Rencana_Sistem_Menara_Base_Tranceiver_Station_BTS_6 = new ol.format.GeoJSON();
var features_Rencana_Sistem_Menara_Base_Tranceiver_Station_BTS_6 = format_Rencana_Sistem_Menara_Base_Tranceiver_Station_BTS_6.readFeatures(json_Rencana_Sistem_Menara_Base_Tranceiver_Station_BTS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rencana_Sistem_Menara_Base_Tranceiver_Station_BTS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rencana_Sistem_Menara_Base_Tranceiver_Station_BTS_6.addFeatures(features_Rencana_Sistem_Menara_Base_Tranceiver_Station_BTS_6);
var lyr_Rencana_Sistem_Menara_Base_Tranceiver_Station_BTS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rencana_Sistem_Menara_Base_Tranceiver_Station_BTS_6, 
                style: style_Rencana_Sistem_Menara_Base_Tranceiver_Station_BTS_6,
                popuplayertitle: "Rencana_Sistem_Menara_Base_Tranceiver_Station_(BTS)",
                interactive: true,
                title: '<img src="styles/legend/Rencana_Sistem_Menara_Base_Tranceiver_Station_BTS_6.png" /> Rencana_Sistem_Menara_Base_Tranceiver_Station_(BTS)'
            });
var format_Rencana_Sistem_Infrastruktur_Pengolahan_Air_Limbah_SPAL_7 = new ol.format.GeoJSON();
var features_Rencana_Sistem_Infrastruktur_Pengolahan_Air_Limbah_SPAL_7 = format_Rencana_Sistem_Infrastruktur_Pengolahan_Air_Limbah_SPAL_7.readFeatures(json_Rencana_Sistem_Infrastruktur_Pengolahan_Air_Limbah_SPAL_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rencana_Sistem_Infrastruktur_Pengolahan_Air_Limbah_SPAL_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rencana_Sistem_Infrastruktur_Pengolahan_Air_Limbah_SPAL_7.addFeatures(features_Rencana_Sistem_Infrastruktur_Pengolahan_Air_Limbah_SPAL_7);
var lyr_Rencana_Sistem_Infrastruktur_Pengolahan_Air_Limbah_SPAL_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rencana_Sistem_Infrastruktur_Pengolahan_Air_Limbah_SPAL_7, 
                style: style_Rencana_Sistem_Infrastruktur_Pengolahan_Air_Limbah_SPAL_7,
                popuplayertitle: "Rencana_Sistem_Infrastruktur_Pengolahan_Air_Limbah_(SPAL)",
                interactive: true,
                title: '<img src="styles/legend/Rencana_Sistem_Infrastruktur_Pengolahan_Air_Limbah_SPAL_7.png" /> Rencana_Sistem_Infrastruktur_Pengolahan_Air_Limbah_(SPAL)'
            });
var format_Rencana_Gardu_Distribusi_8 = new ol.format.GeoJSON();
var features_Rencana_Gardu_Distribusi_8 = format_Rencana_Gardu_Distribusi_8.readFeatures(json_Rencana_Gardu_Distribusi_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rencana_Gardu_Distribusi_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rencana_Gardu_Distribusi_8.addFeatures(features_Rencana_Gardu_Distribusi_8);
var lyr_Rencana_Gardu_Distribusi_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rencana_Gardu_Distribusi_8, 
                style: style_Rencana_Gardu_Distribusi_8,
                popuplayertitle: "Rencana_Gardu_Distribusi",
                interactive: true,
                title: '<img src="styles/legend/Rencana_Gardu_Distribusi_8.png" /> Rencana_Gardu_Distribusi'
            });
var format_Rencana_Bangunan_Penagkap_Mata_Air_9 = new ol.format.GeoJSON();
var features_Rencana_Bangunan_Penagkap_Mata_Air_9 = format_Rencana_Bangunan_Penagkap_Mata_Air_9.readFeatures(json_Rencana_Bangunan_Penagkap_Mata_Air_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rencana_Bangunan_Penagkap_Mata_Air_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rencana_Bangunan_Penagkap_Mata_Air_9.addFeatures(features_Rencana_Bangunan_Penagkap_Mata_Air_9);
var lyr_Rencana_Bangunan_Penagkap_Mata_Air_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rencana_Bangunan_Penagkap_Mata_Air_9, 
                style: style_Rencana_Bangunan_Penagkap_Mata_Air_9,
                popuplayertitle: "Rencana_Bangunan_Penagkap_Mata_Air",
                interactive: true,
                title: '<img src="styles/legend/Rencana_Bangunan_Penagkap_Mata_Air_9.png" /> Rencana_Bangunan_Penagkap_Mata_Air'
            });
var format_Rencana_Jaringan_Transmisi_Air_Baku_10 = new ol.format.GeoJSON();
var features_Rencana_Jaringan_Transmisi_Air_Baku_10 = format_Rencana_Jaringan_Transmisi_Air_Baku_10.readFeatures(json_Rencana_Jaringan_Transmisi_Air_Baku_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rencana_Jaringan_Transmisi_Air_Baku_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rencana_Jaringan_Transmisi_Air_Baku_10.addFeatures(features_Rencana_Jaringan_Transmisi_Air_Baku_10);
var lyr_Rencana_Jaringan_Transmisi_Air_Baku_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rencana_Jaringan_Transmisi_Air_Baku_10, 
                style: style_Rencana_Jaringan_Transmisi_Air_Baku_10,
                popuplayertitle: "Rencana_Jaringan_Transmisi_Air_Baku",
                interactive: true,
                title: '<img src="styles/legend/Rencana_Jaringan_Transmisi_Air_Baku_10.png" /> Rencana_Jaringan_Transmisi_Air_Baku'
            });
var format_Rencana_Saluran_Distribusi_Lainnya_11 = new ol.format.GeoJSON();
var features_Rencana_Saluran_Distribusi_Lainnya_11 = format_Rencana_Saluran_Distribusi_Lainnya_11.readFeatures(json_Rencana_Saluran_Distribusi_Lainnya_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rencana_Saluran_Distribusi_Lainnya_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rencana_Saluran_Distribusi_Lainnya_11.addFeatures(features_Rencana_Saluran_Distribusi_Lainnya_11);
var lyr_Rencana_Saluran_Distribusi_Lainnya_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rencana_Saluran_Distribusi_Lainnya_11, 
                style: style_Rencana_Saluran_Distribusi_Lainnya_11,
                popuplayertitle: "Rencana_Saluran_Distribusi_Lainnya",
                interactive: true,
                title: '<img src="styles/legend/Rencana_Saluran_Distribusi_Lainnya_11.png" /> Rencana_Saluran_Distribusi_Lainnya'
            });
var format_Rencana_Jaringan_Drainase_Sekunder_12 = new ol.format.GeoJSON();
var features_Rencana_Jaringan_Drainase_Sekunder_12 = format_Rencana_Jaringan_Drainase_Sekunder_12.readFeatures(json_Rencana_Jaringan_Drainase_Sekunder_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rencana_Jaringan_Drainase_Sekunder_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rencana_Jaringan_Drainase_Sekunder_12.addFeatures(features_Rencana_Jaringan_Drainase_Sekunder_12);
var lyr_Rencana_Jaringan_Drainase_Sekunder_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rencana_Jaringan_Drainase_Sekunder_12, 
                style: style_Rencana_Jaringan_Drainase_Sekunder_12,
                popuplayertitle: "Rencana_Jaringan_Drainase_Sekunder",
                interactive: true,
                title: '<img src="styles/legend/Rencana_Jaringan_Drainase_Sekunder_12.png" /> Rencana_Jaringan_Drainase_Sekunder'
            });
var format_Sistem_Prasarana_Lainnya_13 = new ol.format.GeoJSON();
var features_Sistem_Prasarana_Lainnya_13 = format_Sistem_Prasarana_Lainnya_13.readFeatures(json_Sistem_Prasarana_Lainnya_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sistem_Prasarana_Lainnya_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sistem_Prasarana_Lainnya_13.addFeatures(features_Sistem_Prasarana_Lainnya_13);
var lyr_Sistem_Prasarana_Lainnya_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sistem_Prasarana_Lainnya_13, 
                style: style_Sistem_Prasarana_Lainnya_13,
                popuplayertitle: "Sistem_Prasarana_Lainnya",
                interactive: true,
                title: '<img src="styles/legend/Sistem_Prasarana_Lainnya_13.png" /> Sistem_Prasarana_Lainnya'
            });
var format_Eksisting_Tempat_Peampungan_Sementara_TPS_14 = new ol.format.GeoJSON();
var features_Eksisting_Tempat_Peampungan_Sementara_TPS_14 = format_Eksisting_Tempat_Peampungan_Sementara_TPS_14.readFeatures(json_Eksisting_Tempat_Peampungan_Sementara_TPS_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eksisting_Tempat_Peampungan_Sementara_TPS_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eksisting_Tempat_Peampungan_Sementara_TPS_14.addFeatures(features_Eksisting_Tempat_Peampungan_Sementara_TPS_14);
var lyr_Eksisting_Tempat_Peampungan_Sementara_TPS_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Eksisting_Tempat_Peampungan_Sementara_TPS_14, 
                style: style_Eksisting_Tempat_Peampungan_Sementara_TPS_14,
                popuplayertitle: "Eksisting_Tempat_Peampungan_Sementara_(TPS)",
                interactive: true,
                title: '<img src="styles/legend/Eksisting_Tempat_Peampungan_Sementara_TPS_14.png" /> Eksisting_Tempat_Peampungan_Sementara_(TPS)'
            });
var format_Eksisting_Sistem_Penyediaan_Air_Minum_15 = new ol.format.GeoJSON();
var features_Eksisting_Sistem_Penyediaan_Air_Minum_15 = format_Eksisting_Sistem_Penyediaan_Air_Minum_15.readFeatures(json_Eksisting_Sistem_Penyediaan_Air_Minum_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eksisting_Sistem_Penyediaan_Air_Minum_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eksisting_Sistem_Penyediaan_Air_Minum_15.addFeatures(features_Eksisting_Sistem_Penyediaan_Air_Minum_15);
var lyr_Eksisting_Sistem_Penyediaan_Air_Minum_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Eksisting_Sistem_Penyediaan_Air_Minum_15, 
                style: style_Eksisting_Sistem_Penyediaan_Air_Minum_15,
                popuplayertitle: "Eksisting_Sistem_Penyediaan_Air_Minum",
                interactive: true,
                title: '<img src="styles/legend/Eksisting_Sistem_Penyediaan_Air_Minum_15.png" /> Eksisting_Sistem_Penyediaan_Air_Minum'
            });
var format_Eksisting_Sistem_Menara_Base_Tranceiver_Station_BTS_16 = new ol.format.GeoJSON();
var features_Eksisting_Sistem_Menara_Base_Tranceiver_Station_BTS_16 = format_Eksisting_Sistem_Menara_Base_Tranceiver_Station_BTS_16.readFeatures(json_Eksisting_Sistem_Menara_Base_Tranceiver_Station_BTS_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eksisting_Sistem_Menara_Base_Tranceiver_Station_BTS_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eksisting_Sistem_Menara_Base_Tranceiver_Station_BTS_16.addFeatures(features_Eksisting_Sistem_Menara_Base_Tranceiver_Station_BTS_16);
var lyr_Eksisting_Sistem_Menara_Base_Tranceiver_Station_BTS_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Eksisting_Sistem_Menara_Base_Tranceiver_Station_BTS_16, 
                style: style_Eksisting_Sistem_Menara_Base_Tranceiver_Station_BTS_16,
                popuplayertitle: "Eksisting_Sistem_Menara_Base_Tranceiver_Station_(BTS)",
                interactive: true,
                title: '<img src="styles/legend/Eksisting_Sistem_Menara_Base_Tranceiver_Station_BTS_16.png" /> Eksisting_Sistem_Menara_Base_Tranceiver_Station_(BTS)'
            });
var format_Eksisting_Gardu_Distribusi_17 = new ol.format.GeoJSON();
var features_Eksisting_Gardu_Distribusi_17 = format_Eksisting_Gardu_Distribusi_17.readFeatures(json_Eksisting_Gardu_Distribusi_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eksisting_Gardu_Distribusi_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eksisting_Gardu_Distribusi_17.addFeatures(features_Eksisting_Gardu_Distribusi_17);
var lyr_Eksisting_Gardu_Distribusi_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Eksisting_Gardu_Distribusi_17, 
                style: style_Eksisting_Gardu_Distribusi_17,
                popuplayertitle: "Eksisting_Gardu_Distribusi",
                interactive: true,
                title: '<img src="styles/legend/Eksisting_Gardu_Distribusi_17.png" /> Eksisting_Gardu_Distribusi'
            });
var format_Sistem_Tanggul_Penahan_Longsor_18 = new ol.format.GeoJSON();
var features_Sistem_Tanggul_Penahan_Longsor_18 = format_Sistem_Tanggul_Penahan_Longsor_18.readFeatures(json_Sistem_Tanggul_Penahan_Longsor_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sistem_Tanggul_Penahan_Longsor_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sistem_Tanggul_Penahan_Longsor_18.addFeatures(features_Sistem_Tanggul_Penahan_Longsor_18);
var lyr_Sistem_Tanggul_Penahan_Longsor_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sistem_Tanggul_Penahan_Longsor_18, 
                style: style_Sistem_Tanggul_Penahan_Longsor_18,
                popuplayertitle: "Sistem_Tanggul_Penahan_Longsor",
                interactive: true,
                title: '<img src="styles/legend/Sistem_Tanggul_Penahan_Longsor_18.png" /> Sistem_Tanggul_Penahan_Longsor'
            });
var format_Sistem_Jalur_Evakuasi_Bencana_19 = new ol.format.GeoJSON();
var features_Sistem_Jalur_Evakuasi_Bencana_19 = format_Sistem_Jalur_Evakuasi_Bencana_19.readFeatures(json_Sistem_Jalur_Evakuasi_Bencana_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sistem_Jalur_Evakuasi_Bencana_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sistem_Jalur_Evakuasi_Bencana_19.addFeatures(features_Sistem_Jalur_Evakuasi_Bencana_19);
var lyr_Sistem_Jalur_Evakuasi_Bencana_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sistem_Jalur_Evakuasi_Bencana_19, 
                style: style_Sistem_Jalur_Evakuasi_Bencana_19,
                popuplayertitle: "Sistem_Jalur_Evakuasi_Bencana",
                interactive: true,
                title: '<img src="styles/legend/Sistem_Jalur_Evakuasi_Bencana_19.png" /> Sistem_Jalur_Evakuasi_Bencana'
            });
var format_Eksisting_Saluran_Distribusi_Lainnya_20 = new ol.format.GeoJSON();
var features_Eksisting_Saluran_Distribusi_Lainnya_20 = format_Eksisting_Saluran_Distribusi_Lainnya_20.readFeatures(json_Eksisting_Saluran_Distribusi_Lainnya_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eksisting_Saluran_Distribusi_Lainnya_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eksisting_Saluran_Distribusi_Lainnya_20.addFeatures(features_Eksisting_Saluran_Distribusi_Lainnya_20);
var lyr_Eksisting_Saluran_Distribusi_Lainnya_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Eksisting_Saluran_Distribusi_Lainnya_20, 
                style: style_Eksisting_Saluran_Distribusi_Lainnya_20,
                popuplayertitle: "Eksisting_Saluran_Distribusi_Lainnya",
                interactive: true,
                title: '<img src="styles/legend/Eksisting_Saluran_Distribusi_Lainnya_20.png" /> Eksisting_Saluran_Distribusi_Lainnya'
            });
var format_Eksisting_Jaringan_Transmisi_Air_Baku_21 = new ol.format.GeoJSON();
var features_Eksisting_Jaringan_Transmisi_Air_Baku_21 = format_Eksisting_Jaringan_Transmisi_Air_Baku_21.readFeatures(json_Eksisting_Jaringan_Transmisi_Air_Baku_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eksisting_Jaringan_Transmisi_Air_Baku_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eksisting_Jaringan_Transmisi_Air_Baku_21.addFeatures(features_Eksisting_Jaringan_Transmisi_Air_Baku_21);
var lyr_Eksisting_Jaringan_Transmisi_Air_Baku_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Eksisting_Jaringan_Transmisi_Air_Baku_21, 
                style: style_Eksisting_Jaringan_Transmisi_Air_Baku_21,
                popuplayertitle: "Eksisting_Jaringan_Transmisi_Air_Baku",
                interactive: true,
                title: '<img src="styles/legend/Eksisting_Jaringan_Transmisi_Air_Baku_21.png" /> Eksisting_Jaringan_Transmisi_Air_Baku'
            });
var format_Eksisting_Jaringan_Drainase_Primer_22 = new ol.format.GeoJSON();
var features_Eksisting_Jaringan_Drainase_Primer_22 = format_Eksisting_Jaringan_Drainase_Primer_22.readFeatures(json_Eksisting_Jaringan_Drainase_Primer_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eksisting_Jaringan_Drainase_Primer_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eksisting_Jaringan_Drainase_Primer_22.addFeatures(features_Eksisting_Jaringan_Drainase_Primer_22);
var lyr_Eksisting_Jaringan_Drainase_Primer_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Eksisting_Jaringan_Drainase_Primer_22, 
                style: style_Eksisting_Jaringan_Drainase_Primer_22,
                popuplayertitle: "Eksisting_Jaringan_Drainase_Primer",
                interactive: true,
                title: '<img src="styles/legend/Eksisting_Jaringan_Drainase_Primer_22.png" /> Eksisting_Jaringan_Drainase_Primer'
            });
var format_SistemPusatPelayanan_23 = new ol.format.GeoJSON();
var features_SistemPusatPelayanan_23 = format_SistemPusatPelayanan_23.readFeatures(json_SistemPusatPelayanan_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SistemPusatPelayanan_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SistemPusatPelayanan_23.addFeatures(features_SistemPusatPelayanan_23);
var lyr_SistemPusatPelayanan_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SistemPusatPelayanan_23, 
                style: style_SistemPusatPelayanan_23,
                popuplayertitle: "Sistem Pusat Pelayanan",
                interactive: true,
    title: 'Sistem Pusat Pelayanan<br />\
    <img src="styles/legend/SistemPusatPelayanan_23_0.png" /> Pusat Lingkungan Kelurahan / Desa<br />\
    <img src="styles/legend/SistemPusatPelayanan_23_1.png" /> Pusat Rukun Warga<br />'
        });
var format_Batas_Dusun_24 = new ol.format.GeoJSON();
var features_Batas_Dusun_24 = format_Batas_Dusun_24.readFeatures(json_Batas_Dusun_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Dusun_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Dusun_24.addFeatures(features_Batas_Dusun_24);
var lyr_Batas_Dusun_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Dusun_24, 
                style: style_Batas_Dusun_24,
                popuplayertitle: "Batas_Dusun",
                interactive: true,
    title: 'Batas_Dusun<br />\
    <img src="styles/legend/Batas_Dusun_24_0.png" /> Dusun Cibubut<br />\
    <img src="styles/legend/Batas_Dusun_24_1.png" /> Dusun Simpaywargi<br />\
    <img src="styles/legend/Batas_Dusun_24_2.png" /> Dusun Sirnagalih<br />\
    <img src="styles/legend/Batas_Dusun_24_3.png" /> Dusun Sukamaju<br />'
        });
var format_Batas_RW_25 = new ol.format.GeoJSON();
var features_Batas_RW_25 = format_Batas_RW_25.readFeatures(json_Batas_RW_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_RW_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_RW_25.addFeatures(features_Batas_RW_25);
var lyr_Batas_RW_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_RW_25, 
                style: style_Batas_RW_25,
                popuplayertitle: "Batas_RW",
                interactive: true,
    title: 'Batas_RW<br />\
    <img src="styles/legend/Batas_RW_25_0.png" /> RW 1<br />\
    <img src="styles/legend/Batas_RW_25_1.png" /> RW 10<br />\
    <img src="styles/legend/Batas_RW_25_2.png" /> RW 2<br />\
    <img src="styles/legend/Batas_RW_25_3.png" /> RW 3<br />\
    <img src="styles/legend/Batas_RW_25_4.png" /> RW 4<br />\
    <img src="styles/legend/Batas_RW_25_5.png" /> RW 5<br />\
    <img src="styles/legend/Batas_RW_25_6.png" /> RW 6<br />\
    <img src="styles/legend/Batas_RW_25_7.png" /> RW 7<br />\
    <img src="styles/legend/Batas_RW_25_8.png" /> RW 8<br />\
    <img src="styles/legend/Batas_RW_25_9.png" /> RW 9<br />'
        });
var format_Batas_RT_26 = new ol.format.GeoJSON();
var features_Batas_RT_26 = format_Batas_RT_26.readFeatures(json_Batas_RT_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_RT_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_RT_26.addFeatures(features_Batas_RT_26);
var lyr_Batas_RT_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_RT_26, 
                style: style_Batas_RT_26,
                popuplayertitle: "Batas_RT",
                interactive: true,
    title: 'Batas_RT<br />\
    <img src="styles/legend/Batas_RT_26_0.png" /> RT 1<br />\
    <img src="styles/legend/Batas_RT_26_1.png" /> RT 2<br />\
    <img src="styles/legend/Batas_RT_26_2.png" /> RT 3<br />'
        });
var format_Sungai_27 = new ol.format.GeoJSON();
var features_Sungai_27 = format_Sungai_27.readFeatures(json_Sungai_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_27.addFeatures(features_Sungai_27);
var lyr_Sungai_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_27, 
                style: style_Sungai_27,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/Sungai_27.png" /> Sungai'
            });
var format_Jalan_28 = new ol.format.GeoJSON();
var features_Jalan_28 = format_Jalan_28.readFeatures(json_Jalan_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_28.addFeatures(features_Jalan_28);
var lyr_Jalan_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_28, 
                style: style_Jalan_28,
                popuplayertitle: "Jalan",
                interactive: true,
    title: 'Jalan<br />\
    <img src="styles/legend/Jalan_28_0.png" /> Jalan antar desa<br />\
    <img src="styles/legend/Jalan_28_1.png" /> Jalan Lokal<br />\
    <img src="styles/legend/Jalan_28_2.png" /> Jalan Setapak<br />'
        });
var format_Ibukota_Desa_29 = new ol.format.GeoJSON();
var features_Ibukota_Desa_29 = format_Ibukota_Desa_29.readFeatures(json_Ibukota_Desa_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ibukota_Desa_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ibukota_Desa_29.addFeatures(features_Ibukota_Desa_29);
var lyr_Ibukota_Desa_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ibukota_Desa_29, 
                style: style_Ibukota_Desa_29,
                popuplayertitle: "Ibukota_Desa",
                interactive: true,
                title: '<img src="styles/legend/Ibukota_Desa_29.png" /> Ibukota_Desa'
            });
var group_StrukturRuangEksisting = new ol.layer.Group({
                                layers: [lyr_Sistem_Prasarana_Lainnya_13,lyr_Eksisting_Tempat_Peampungan_Sementara_TPS_14,lyr_Eksisting_Sistem_Penyediaan_Air_Minum_15,lyr_Eksisting_Sistem_Menara_Base_Tranceiver_Station_BTS_16,lyr_Eksisting_Gardu_Distribusi_17,lyr_Sistem_Tanggul_Penahan_Longsor_18,lyr_Sistem_Jalur_Evakuasi_Bencana_19,lyr_Eksisting_Saluran_Distribusi_Lainnya_20,lyr_Eksisting_Jaringan_Transmisi_Air_Baku_21,lyr_Eksisting_Jaringan_Drainase_Primer_22,],
                                fold: "open",
                                title: "Struktur Ruang Eksisting"});
var group_RencanaStrukturRuang = new ol.layer.Group({
                                layers: [lyr_Rencana_Tempat_Pengelolaan_Sampah_Reuse_Reduce_Recycle_TPS3R_5,lyr_Rencana_Sistem_Menara_Base_Tranceiver_Station_BTS_6,lyr_Rencana_Sistem_Infrastruktur_Pengolahan_Air_Limbah_SPAL_7,lyr_Rencana_Gardu_Distribusi_8,lyr_Rencana_Bangunan_Penagkap_Mata_Air_9,lyr_Rencana_Jaringan_Transmisi_Air_Baku_10,lyr_Rencana_Saluran_Distribusi_Lainnya_11,lyr_Rencana_Jaringan_Drainase_Sekunder_12,],
                                fold: "open",
                                title: "Rencana Struktur Ruang "});

lyr_OpenStreetMap_0.setVisible(false);lyr_Satelit_1.setVisible(true);lyr_Tapak_Kawasan_Prioritas_2.setVisible(false);lyr_Tapak_Pusat_Desa_3.setVisible(false);lyr_RencanaPolaRuang_4.setVisible(true);lyr_Rencana_Tempat_Pengelolaan_Sampah_Reuse_Reduce_Recycle_TPS3R_5.setVisible(false);lyr_Rencana_Sistem_Menara_Base_Tranceiver_Station_BTS_6.setVisible(false);lyr_Rencana_Sistem_Infrastruktur_Pengolahan_Air_Limbah_SPAL_7.setVisible(false);lyr_Rencana_Gardu_Distribusi_8.setVisible(false);lyr_Rencana_Bangunan_Penagkap_Mata_Air_9.setVisible(false);lyr_Rencana_Jaringan_Transmisi_Air_Baku_10.setVisible(false);lyr_Rencana_Saluran_Distribusi_Lainnya_11.setVisible(false);lyr_Rencana_Jaringan_Drainase_Sekunder_12.setVisible(false);lyr_Sistem_Prasarana_Lainnya_13.setVisible(false);lyr_Eksisting_Tempat_Peampungan_Sementara_TPS_14.setVisible(false);lyr_Eksisting_Sistem_Penyediaan_Air_Minum_15.setVisible(false);lyr_Eksisting_Sistem_Menara_Base_Tranceiver_Station_BTS_16.setVisible(false);lyr_Eksisting_Gardu_Distribusi_17.setVisible(false);lyr_Sistem_Tanggul_Penahan_Longsor_18.setVisible(false);lyr_Sistem_Jalur_Evakuasi_Bencana_19.setVisible(false);lyr_Eksisting_Saluran_Distribusi_Lainnya_20.setVisible(false);lyr_Eksisting_Jaringan_Transmisi_Air_Baku_21.setVisible(false);lyr_Eksisting_Jaringan_Drainase_Primer_22.setVisible(false);lyr_SistemPusatPelayanan_23.setVisible(false);lyr_Batas_Dusun_24.setVisible(false);lyr_Batas_RW_25.setVisible(false);lyr_Batas_RT_26.setVisible(false);lyr_Sungai_27.setVisible(false);lyr_Jalan_28.setVisible(false);lyr_Ibukota_Desa_29.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_Satelit_1,lyr_Tapak_Kawasan_Prioritas_2,lyr_Tapak_Pusat_Desa_3,lyr_RencanaPolaRuang_4,group_RencanaStrukturRuang,group_StrukturRuangEksisting,lyr_SistemPusatPelayanan_23,lyr_Batas_Dusun_24,lyr_Batas_RW_25,lyr_Batas_RT_26,lyr_Sungai_27,lyr_Jalan_28,lyr_Ibukota_Desa_29];
lyr_Tapak_Kawasan_Prioritas_2.set('fieldAliases', {'Nama': 'Nama', 'luas m2': 'luas m2', });
lyr_Tapak_Pusat_Desa_3.set('fieldAliases', {'KET': 'KET', 'Luas m2': 'Luas m2', });
lyr_RencanaPolaRuang_4.set('fieldAliases', {'Zona': 'Zona', 'Sub_Zona': 'Sub_Zona', 'Kode': 'Kode', 'Luas (ha)': 'Luas (ha)', });
lyr_Rencana_Tempat_Pengelolaan_Sampah_Reuse_Reduce_Recycle_TPS3R_5.set('fieldAliases', {'Id': 'Id', });
lyr_Rencana_Sistem_Menara_Base_Tranceiver_Station_BTS_6.set('fieldAliases', {'Id': 'Id', });
lyr_Rencana_Sistem_Infrastruktur_Pengolahan_Air_Limbah_SPAL_7.set('fieldAliases', {'Id': 'Id', });
lyr_Rencana_Gardu_Distribusi_8.set('fieldAliases', {'Id': 'Id', });
lyr_Rencana_Bangunan_Penagkap_Mata_Air_9.set('fieldAliases', {'Id': 'Id', });
lyr_Rencana_Jaringan_Transmisi_Air_Baku_10.set('fieldAliases', {'Id': 'Id', 'pp': 'pp', });
lyr_Rencana_Saluran_Distribusi_Lainnya_11.set('fieldAliases', {'Id': 'Id', 'p': 'p', });
lyr_Rencana_Jaringan_Drainase_Sekunder_12.set('fieldAliases', {'Id': 'Id', });
lyr_Sistem_Prasarana_Lainnya_13.set('fieldAliases', {'Id': 'Id', 'Titik': 'Titik', });
lyr_Eksisting_Tempat_Peampungan_Sementara_TPS_14.set('fieldAliases', {'Id': 'Id', 'KET': 'KET', });
lyr_Eksisting_Sistem_Penyediaan_Air_Minum_15.set('fieldAliases', {'Id': 'Id', 'LAYANAN_AI': 'LAYANAN_AI', 'KET': 'KET', });
lyr_Eksisting_Sistem_Menara_Base_Tranceiver_Station_BTS_16.set('fieldAliases', {'Id': 'Id', });
lyr_Eksisting_Gardu_Distribusi_17.set('fieldAliases', {'Id': 'Id', });
lyr_Sistem_Tanggul_Penahan_Longsor_18.set('fieldAliases', {'Id': 'Id', });
lyr_Sistem_Jalur_Evakuasi_Bencana_19.set('fieldAliases', {'Id': 'Id', 'p': 'p', });
lyr_Eksisting_Saluran_Distribusi_Lainnya_20.set('fieldAliases', {'Id': 'Id', 'p': 'p', });
lyr_Eksisting_Jaringan_Transmisi_Air_Baku_21.set('fieldAliases', {'Id': 'Id', 'luas': 'luas', });
lyr_Eksisting_Jaringan_Drainase_Primer_22.set('fieldAliases', {'Id': 'Id', });
lyr_SistemPusatPelayanan_23.set('fieldAliases', {'Keterangan': 'Keterangan', });
lyr_Batas_Dusun_24.set('fieldAliases', {'Dusun': 'Dusun', 'Kampung': 'Kampung', 'Luas (ha)': 'Luas (ha)', });
lyr_Batas_RW_25.set('fieldAliases', {'RW': 'RW', 'Luas (ha)': 'Luas (ha)', });
lyr_Batas_RT_26.set('fieldAliases', {'RT': 'RT', 'RW': 'RW', 'Luas (ha)': 'Luas (ha)', });
lyr_Sungai_27.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', });
lyr_Jalan_28.set('fieldAliases', {'REMARK': 'REMARK', });
lyr_Ibukota_Desa_29.set('fieldAliases', {'Id': 'Id', });
lyr_Tapak_Kawasan_Prioritas_2.set('fieldImages', {'Nama': 'TextEdit', 'luas m2': 'TextEdit', });
lyr_Tapak_Pusat_Desa_3.set('fieldImages', {'KET': 'TextEdit', 'Luas m2': '', });
lyr_RencanaPolaRuang_4.set('fieldImages', {'Zona': 'TextEdit', 'Sub_Zona': 'TextEdit', 'Kode': 'TextEdit', 'Luas (ha)': 'TextEdit', });
lyr_Rencana_Tempat_Pengelolaan_Sampah_Reuse_Reduce_Recycle_TPS3R_5.set('fieldImages', {'Id': 'Range', });
lyr_Rencana_Sistem_Menara_Base_Tranceiver_Station_BTS_6.set('fieldImages', {'Id': 'Range', });
lyr_Rencana_Sistem_Infrastruktur_Pengolahan_Air_Limbah_SPAL_7.set('fieldImages', {'Id': 'Range', });
lyr_Rencana_Gardu_Distribusi_8.set('fieldImages', {'Id': 'Range', });
lyr_Rencana_Bangunan_Penagkap_Mata_Air_9.set('fieldImages', {'Id': 'Range', });
lyr_Rencana_Jaringan_Transmisi_Air_Baku_10.set('fieldImages', {'Id': '', 'pp': '', });
lyr_Rencana_Saluran_Distribusi_Lainnya_11.set('fieldImages', {'Id': '', 'p': '', });
lyr_Rencana_Jaringan_Drainase_Sekunder_12.set('fieldImages', {'Id': '', });
lyr_Sistem_Prasarana_Lainnya_13.set('fieldImages', {'Id': 'Range', 'Titik': 'TextEdit', });
lyr_Eksisting_Tempat_Peampungan_Sementara_TPS_14.set('fieldImages', {'Id': 'Range', 'KET': 'TextEdit', });
lyr_Eksisting_Sistem_Penyediaan_Air_Minum_15.set('fieldImages', {'Id': 'Range', 'LAYANAN_AI': 'TextEdit', 'KET': 'TextEdit', });
lyr_Eksisting_Sistem_Menara_Base_Tranceiver_Station_BTS_16.set('fieldImages', {'Id': 'Range', });
lyr_Eksisting_Gardu_Distribusi_17.set('fieldImages', {'Id': 'Range', });
lyr_Sistem_Tanggul_Penahan_Longsor_18.set('fieldImages', {'Id': '', });
lyr_Sistem_Jalur_Evakuasi_Bencana_19.set('fieldImages', {'Id': '', 'p': '', });
lyr_Eksisting_Saluran_Distribusi_Lainnya_20.set('fieldImages', {'Id': '', 'p': '', });
lyr_Eksisting_Jaringan_Transmisi_Air_Baku_21.set('fieldImages', {'Id': '', 'luas': '', });
lyr_Eksisting_Jaringan_Drainase_Primer_22.set('fieldImages', {'Id': '', });
lyr_SistemPusatPelayanan_23.set('fieldImages', {'Keterangan': 'TextEdit', });
lyr_Batas_Dusun_24.set('fieldImages', {'Dusun': 'TextEdit', 'Kampung': 'TextEdit', 'Luas (ha)': '', });
lyr_Batas_RW_25.set('fieldImages', {'RW': 'TextEdit', 'Luas (ha)': '', });
lyr_Batas_RT_26.set('fieldImages', {'RT': 'TextEdit', 'RW': 'TextEdit', 'Luas (ha)': '', });
lyr_Sungai_27.set('fieldImages', {'NAMOBJ': 'TextEdit', });
lyr_Jalan_28.set('fieldImages', {'REMARK': 'TextEdit', });
lyr_Ibukota_Desa_29.set('fieldImages', {'Id': 'Range', });
lyr_Tapak_Kawasan_Prioritas_2.set('fieldLabels', {'Nama': 'inline label - always visible', 'luas m2': 'inline label - always visible', });
lyr_Tapak_Pusat_Desa_3.set('fieldLabels', {'KET': 'inline label - always visible', 'Luas m2': 'inline label - always visible', });
lyr_RencanaPolaRuang_4.set('fieldLabels', {'Zona': 'inline label - always visible', 'Sub_Zona': 'inline label - always visible', 'Kode': 'inline label - always visible', 'Luas (ha)': 'inline label - always visible', });
lyr_Rencana_Tempat_Pengelolaan_Sampah_Reuse_Reduce_Recycle_TPS3R_5.set('fieldLabels', {'Id': 'no label', });
lyr_Rencana_Sistem_Menara_Base_Tranceiver_Station_BTS_6.set('fieldLabels', {'Id': 'no label', });
lyr_Rencana_Sistem_Infrastruktur_Pengolahan_Air_Limbah_SPAL_7.set('fieldLabels', {'Id': 'no label', });
lyr_Rencana_Gardu_Distribusi_8.set('fieldLabels', {'Id': 'no label', });
lyr_Rencana_Bangunan_Penagkap_Mata_Air_9.set('fieldLabels', {'Id': 'no label', });
lyr_Rencana_Jaringan_Transmisi_Air_Baku_10.set('fieldLabels', {'Id': 'no label', 'pp': 'no label', });
lyr_Rencana_Saluran_Distribusi_Lainnya_11.set('fieldLabels', {'Id': 'no label', 'p': 'no label', });
lyr_Rencana_Jaringan_Drainase_Sekunder_12.set('fieldLabels', {'Id': 'no label', });
lyr_Sistem_Prasarana_Lainnya_13.set('fieldLabels', {'Id': 'no label', 'Titik': 'no label', });
lyr_Eksisting_Tempat_Peampungan_Sementara_TPS_14.set('fieldLabels', {'Id': 'no label', 'KET': 'no label', });
lyr_Eksisting_Sistem_Penyediaan_Air_Minum_15.set('fieldLabels', {'Id': 'no label', 'LAYANAN_AI': 'no label', 'KET': 'no label', });
lyr_Eksisting_Sistem_Menara_Base_Tranceiver_Station_BTS_16.set('fieldLabels', {'Id': 'no label', });
lyr_Eksisting_Gardu_Distribusi_17.set('fieldLabels', {'Id': 'no label', });
lyr_Sistem_Tanggul_Penahan_Longsor_18.set('fieldLabels', {'Id': 'no label', });
lyr_Sistem_Jalur_Evakuasi_Bencana_19.set('fieldLabels', {'Id': 'no label', 'p': 'no label', });
lyr_Eksisting_Saluran_Distribusi_Lainnya_20.set('fieldLabels', {'Id': 'no label', 'p': 'no label', });
lyr_Eksisting_Jaringan_Transmisi_Air_Baku_21.set('fieldLabels', {'Id': 'no label', 'luas': 'no label', });
lyr_Eksisting_Jaringan_Drainase_Primer_22.set('fieldLabels', {'Id': 'no label', });
lyr_SistemPusatPelayanan_23.set('fieldLabels', {'Keterangan': 'no label', });
lyr_Batas_Dusun_24.set('fieldLabels', {'Dusun': 'inline label - always visible', 'Kampung': 'inline label - always visible', 'Luas (ha)': 'inline label - always visible', });
lyr_Batas_RW_25.set('fieldLabels', {'RW': 'inline label - always visible', 'Luas (ha)': 'inline label - always visible', });
lyr_Batas_RT_26.set('fieldLabels', {'RT': 'inline label - always visible', 'RW': 'inline label - always visible', 'Luas (ha)': 'inline label - always visible', });
lyr_Sungai_27.set('fieldLabels', {'NAMOBJ': 'no label', });
lyr_Jalan_28.set('fieldLabels', {'REMARK': 'no label', });
lyr_Ibukota_Desa_29.set('fieldLabels', {'Id': 'no label', });
lyr_Ibukota_Desa_29.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});