{
  'targets': [
    {
      'target_name': 'uws',
      'sources': [
        'src/Extensions.cpp',
        'src/Group.cpp',
        'src/Networking.cpp',
        'src/Hub.cpp',
        'src/Node.cpp',
        'src/WebSocket.cpp',
        'src/HTTPSocket.cpp',
        'src/Socket.cpp',
        'src/addon.cpp'
      ],
      'conditions': [
        ['OS=="linux"', {
          'cflags_cc': [ '-std=c++11', '-DUSE_LIBUV' ],
          'cflags_cc!': [ '-fno-exceptions', '-std=gnu++0x', '-fno-rtti' ],
          'cflags!': [ '-fno-omit-frame-pointer' ],
          'ldflags!': [ '-rdynamic' ],
          'ldflags': [ '-s' ]
        }],
        ['OS=="mac"', {
          'xcode_settings': {
            'MACOSX_DEPLOYMENT_TARGET': '10.7',
            'CLANG_CXX_LANGUAGE_STANDARD': 'c++11',
            'CLANG_CXX_LIBRARY': 'libc++',
            'GCC_GENERATE_DEBUGGING_SYMBOLS': 'NO',
            'GCC_ENABLE_CPP_EXCEPTIONS': 'YES',
            'GCC_THREADSAFE_STATICS': 'YES',
            'GCC_OPTIMIZATION_LEVEL': '3',
            'GCC_ENABLE_CPP_RTTI': 'YES',
            'OTHER_CFLAGS!': [ '-fno-strict-aliasing' ],
            'OTHER_CPLUSPLUSFLAGS': [ '-DUSE_LIBUV' ]
          }
        }],
        ['OS=="win"', {
          'cflags_cc': [ '/DUSE_LIBUV' ],
          'cflags_cc!': []
        }]
       ]
    },
    {
      'target_name': 'action_after_build',
      'type': 'none',
      'dependencies': [ 'uws' ],
      'conditions': [
        ['OS!="win"', {
            'actions': [
              {
                'action_name': 'move_lib',
                'inputs': [
                  '<@(PRODUCT_DIR)/uws.node'
                ],
                'outputs': [
                  'uws'
                ],
                'action': ['cp', '<@(PRODUCT_DIR)/uws.node', 'uws_<!@(node -p process.platform)_<!@(node -p process.versions.modules).node']
              }
            ]}
        ],
        ['OS=="win"', {
            'actions': [
              {
                'action_name': 'move_lib',
                'inputs': [
                  '<@(PRODUCT_DIR)/uws.node'
                ],
                'outputs': [
                  'uws'
                ],
                'action': ['copy', '<@(PRODUCT_DIR)/uws.node', 'uws_<!@(node -p process.platform)_<!@(node -p process.versions.modules).node']
              }
            ]}
        ]
      ]
    }
  ]
}
